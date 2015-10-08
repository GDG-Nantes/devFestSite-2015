'use strict';

devfestApp.factory('ProgrammeService', ['$http', '$q', 'FavoritesService', function($http, $q, favService){

    function getProgramme(callBack){
        $http({
            url : '/assets/prog.json',
            method : 'GET',
            transformResponse : function(data){
                var programme = JSON.parse(data);
                
                // On map les speakers
                _(programme.sessions).map(function (session) {
                    if (!session.speakers)
                        return session;
                    session.speakers = _(session.speakers).map(function (speaker) {
                        return programme.speakers[_.findIndex(programme.speakers, function (speakerTmp) {
                            return speakerTmp.id === speaker;
                        })];
                    }).value();                    

                    return session;
                }).value();

                // On prépare les données pour mieux les afficher
                programme.sessionsTransform = _.chain(programme.sessions).filter(function(session){
                    return session.type === 'white'
                        || session.type === 'mobile'
                        || session.type === 'web'
                        || session.type === 'cloud'
                        || session.type === 'discovery';
                }).forEach(function (session) {
                    session.hourContent = programme.hours[session.hour]
                }).groupBy(function (session) {
                    return session.hour;
                }).mapValues(function (sessionValues) {
                    return _(sessionValues).forEach(function (session) {
                        session.classCol = sessionValues.length === 1 ? 'col-md-12' : 'col-md-3';
                    }).sortBy(function (session) {
                        switch (session.type) {
                            case 'mobile':
                                return 0;
                            case 'web' :
                                return 1;
                            case 'cloud' :
                                return 2;
                            case 'discovery' :
                                return 3;
                            default :
                                return 4;
                        }
                    }).value();
                }).values().sortBy(function (sessionValues) {
                    return sessionValues[0].hour;
                }).value();

                programme.codelabTransform = _.chain(programme.sessions).filter(function(session){
                    return session.type === 'codelab-web'
                        || session.type === 'codelab-cloud';
                }).forEach(function (session) {
                    session.hourContent = programme.hours[session.hour]
                }).groupBy(function (session) {
                    return session.hour;
                }).mapValues(function (sessionValues) {
                    return _(sessionValues).forEach(function (session) {
                        session.classCol = sessionValues.length === 1 ? 'col-md-12' : 'col-md-3';
                    }).sortBy(function (session) {
                        switch (session.type) {
                            case 'codelab-web':
                                return 0;
                            case 'codelab-cloud' :
                                return 1;
                            default :
                                return 2;
                        }
                    }).value();
                }).values().sortBy(function (sessionValues) {
                    return sessionValues[0].hour;
                })
                    .value();

                programme.formationTransform = _.chain(programme.sessions).filter(function(session){
                    return session.type === 'formation';
                }).forEach(function (session) {
                    session.hourContent = programme.hours[session.hour]
                }).groupBy(function (session) {
                    return session.hour;
                }).mapValues(function (sessionValues) {
                    return _(sessionValues).forEach(function (session) {
                        session.classCol = sessionValues.length === 1 ? 'col-md-12' : 'col-md-3';
                    }).sortBy(function (session) {
                        switch (session.type) {
                            case 'formation':
                                return 0;
                        }
                    }).value();
                }).values().sortBy(function (sessionValues) {
                    return sessionValues[0].hour;
                })
                    .value()

                programme.speakers = _.chain(programme.speakers).forEach(function(speaker){
                    _.forEach(speaker.socials, function(social){
                        social.svg = "/img/sprites/sprites.svg#icon-" + social.class;
                    });
                }).sortBy(function(speaker){
                    return speaker.firstname;
                }).value();



                return programme;
            }
        }).then(function(data){
            var promiseFav = $q.defer();
            // Pour l'instant rien n'est fait car on a pas le service http de requete des favoris ! 
            var userLogged = localStorage['user']; // TODO checker avec hello pour l'instant false
            if (userLogged){
                // On va aller récupérer ses favoris
                $http({
                    url : '/api/v1/stars/get',
                    method : 'GET',
                    params : {login : encodeURIComponent(userLogged)}
                    
                }).then(function (dataFav){
                    // Voir ce qu'on fait des données 
                    // TODO  A brancher pour de vrai
                    // On écrase les favoris par ceux venant du serveur
                    localStorage['fav'] = JSON.stringify(dataFav.data.favs);
                    favService.applyFav(data.data.sessions, dataFav.data.favs);
                    promiseFav.resolve(data.data);
                });
            }else{
                // S'il n'est pas loggué, alors on regarde dans le localstorage
                if (localStorage['fav']){
                    favService.applyFav(data.data.sessions, JSON.parse(localStorage['fav']));
                }
                promiseFav.resolve(data.data);
            }
            return promiseFav.promise;
        }).then(function(data){
            callBack(data);

        });
    }

    return {
        getProgramme : getProgramme
    }
}]);
