'use strict';

devfestApp.factory('ProgrammeService', ['$http', function($http){

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
            callBack(data.data);
            //$scope.programme = data.data;//JSON.parse(data.data);
            //console.log(JSON.parse(data.data));
        });
    }

    return {
        getProgramme : getProgramme
    }
}]);
