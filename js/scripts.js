(function($) {
    $(document).ready(function() {
        $(window).load(function() {
            $('#st-container').removeClass('disable-scrolling');
            $('#st-container')[0].style.display = '';
            $('#loading-animation').fadeOut();
            if (!$('#loader')[0]){
                // Hack lié à l'injection (pas sur de l'avoir en prod ... ?)
                setTimeout(function() {
                    $('#loader').delay(350).fadeOut(800);
                }, 500);
            }else{
                $('#loader').delay(350).fadeOut(800);
            }
            initGooglePlus();
            equalheight('.same-height');

            $.getScript((location.pathname != '/' ? '../' : './')+"custo/konami.js", function(){
                var easter_egg = new Konami(function() { 
                    var iframe = $('#game');
                    if (!iframe[0])
                        return;

                    if (!iframe.attr('src')){
                        iframe.attr('src', iframe.attr('data-src'));
                    }
                    $('#myModal').on('shown.bs.modal', function () {
                        $('#game').focus()
                    }).modal({
                        keyboard: true,
                        show: true
                    });

                });
            });

            if (!$('.socials')[0]){
                $('#menu-connexion')[0].style.display = 'none';
            }else{

                $('.socials button').on('click', function(event){
                    var network = $(event.target).attr('data-social');
                    hello(network).login(network, {}, function(auth){
                        hello(auth.network).api('/me').then(function(r) {
                            localStorage['user'] = network+r.id;
                            //console.log(r);   
                            // Une fois persité on peut chercher à récupérer les données du serveur       
                            location.reload();          
                        });
                    });
                });

                var creds = {
                    google : "312903486392-eu80fphua3j2t4jfahejoq6l9u6p2399.apps.googleusercontent.com",
                    twitter : "AeqcY7PWrepZiGZcptsJseWVX",
                    github : "f050e9a66b1a179c2d77"
                };
                var config = {
                    redirect_uri : 'redirect.html',
                    scope:'email'
                } 

                hello.init(creds,config);
                

            }
        });


        if ($(window).width() > 1500) {
            $('.effect-wrapper').addClass('col-lg-3');
        }
        if ($(window).width() < 768) {
            $('.animated').removeClass('animated').removeClass('hiding');
            $('.stat span').removeClass('timer');
            $('.timeslot-label').addClass('stick-label');
        }
        if ($(window).height() < 512) {
            $('#bottom-navlinks').removeClass('bottom-navlinks').addClass('bottom-navlinks-small');
        }
        if ($(window).scrollTop() >= 100) {
            $('#top-header').addClass('after-scroll');
            $('#logo-header .logo').removeClass('logo-light').addClass('logo-dark');
        }

        $(window).scroll(function() {
            var scroll = $(this).scrollTop();
            var header = $('#top-header');
            var logo = $('#logo-header .logo');
            var buyButton = $('.right-nav-button');
            var topOffset = header.height() + $('.track-header').height();

            if (scroll >= 100) {
                header.addClass('after-scroll');
                logo.removeClass('logo-light').addClass('logo-dark');
            } else {
                header.removeClass('after-scroll');
                logo.removeClass('logo-dark').addClass('logo-light');
            }

            if (scroll >= $('.top-section').height() && $(window).width() > 767) {
                buyButton.removeClass('right-nav-button-hidden');
            } else if (scroll < $('.top-section').height() && $(window).width() > 767){
                buyButton.addClass('right-nav-button-hidden');
            }

            $('.slot').each(function() {
                var currentPosition = $(this).offset().top - scroll;
                var offsetActivator = topOffset + $(this).find('.slot-title').height();
                if (currentPosition <= offsetActivator && currentPosition >= 0) {
                    $('.track-header.sticky').find('.slot-detail').html($(this).data('slotDetail'));
                }
            });
        });

        $(window).resize(function() {
            if ($(window).width() > 1500) {
                $('.effect-wrapper').addClass('col-lg-3');
            } else {
                $('.effect-wrapper').removeClass('col-lg-3');
            }
            if ($(window).width() < 768) {
                $('.same-height').css('height', '100%');
                $('.timeslot-label').addClass('stick-label');
            } else {
                $('.timeslot-label').removeClass('stick-label');
                if (container.hasClass('st-menu-open')) {
                    container.removeClass('st-menu-open');
                    $('body').css('overflow', 'auto');
                }
                equalheight('.same-height');
            }
            if ($(window).height() < 512) {
                $('.st-menu').addClass('scrollable');
                $('#bottom-navlinks').removeClass('bottom-navlinks').addClass('bottom-navlinks-small');
            } else {
                $('.st-menu').removeClass('scrollable');
                $('#bottom-navlinks').removeClass('bottom-navlinks-small').addClass('bottom-navlinks');
            }
        });

        $(function() {
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });
        $(function() {
            $('a[href=#]').click(function() {
                event.preventDefault();
            });
        });
        $(function() {
            if(window.location.href.indexOf("schedule") > -1 && window.location.hash) {
                var hash = window.location.hash;
                $(hash).click();
            } 
        });

        $(function() {
            var appear, delay, i, offset, _i, _len, _ref;
            _ref = $(".appear-animation");
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                i = _ref[_i];
                offset = i.offsetLeft + i.offsetTop;
                delay = offset / 1000;
                $(i).css('transition-delay', '' + (delay * 0.47) + 's');
                $(i).css('transition-duration', '' + 0.2 + 's');
            }
        });
        $('.appear-animation-trigger').appear(function() {
            setTimeout(function() {
                $('.appear-animation-trigger').parent('div').find('.appear-animation').addClass('visible');
            }, 1000);
        });

        $('.animated').appear(function() {
            var element = $(this);
            var animation = element.data('animation');
            var animationDelay = element.data('delay');
            if (animationDelay) {
                setTimeout(function() {
                    element.addClass(animation + " visible");
                    element.removeClass('hiding');
                    if (element.hasClass('counter')) {
                        element.find('.timer').countTo();
                    }
                }, animationDelay);
            } else {
                element.addClass(animation + " visible");
                element.removeClass('hiding');
                if (element.hasClass('counter')) {
                    element.find('.timer').countTo();
                }
            }
        }, {
            accY: -150
        });


        var equalheight = function(container) {
            var currentTallest = 0,
                currentRowStart = 0,
                rowDivs = new Array(),
                $el,
                topPosition = 0;
            $(container).each(function() {
                $el = $(this);
                $($el).height('auto')
                topPostion = $el.position().top;
                if (currentRowStart != topPostion) {
                    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                        rowDivs[currentDiv].height(currentTallest);
                    }
                    rowDivs.length = 0; // empty the array
                    currentRowStart = topPostion;
                    currentTallest = $el.height();
                    rowDivs.push($el);
                } else {
                    rowDivs.push($el);
                    currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
                }
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
            });
        }


        //Side menu
        var container = $('.st-container');
        $('#menu-trigger').click(function(event) {
            event.stopPropagation();
            container.toggleClass('st-menu-open');
        });
        $('.st-pusher').click(function() {
            if (container.hasClass('st-menu-open')) {
                container.removeClass('st-menu-open');
            }
        });

        $('.track-header').each(function() {
            var slot = $(this).closest('.schedule-table').find('.slot').first();
            var scheduleFirstSlotText;
            while (scheduleFirstSlotText === undefined) {
                scheduleFirstSlotText = slot.data('slotDetail');
                slot = slot.next();
            }
            $(this).find('.slot-detail').html(scheduleFirstSlotText);
        });

        $('#post-section .post-body p').each(function() {
            if ($(this).find('.feature-image').length) {
                var url = $(this).find('.feature-image').prop('src');
                $('#top-section').css('background-image', 'url(' + url + ')').addClass('enable-overlay');
            }
        });

        $('.slider').each(function() {
            $(this).find('.slider-item').first().addClass('slider-current-item').removeClass('hidden');
            if ($(this).find('.slider-item').length > 1) {
                $(this).closest('.speaker-item').find('.slider-next-item').removeClass('hidden');
            }
        });
        $('.slider-next-item').click(function() {
            var slider = $(this).closest('div');
            var elem = slider.find('.slider-current-item').next();
            if (elem.length) {
                elem.addClass('slider-current-item').removeClass('hidden');
                slider.find('.slider-current-item').first().removeClass('slider-current-item').addClass('hidden');
            } else {
                slider.find('.slider-item').first().addClass('slider-current-item').removeClass('hidden');
                slider.find('.slider-current-item').last().removeClass('slider-current-item').addClass('hidden');
            }
        });
        $('.modal').on('hidden.bs.modal', function () {
            var iframe = $(this).find('iframe');
            iframe.attr('src', iframe.attr('src'));
        });
        $('.slot').click(function() {
            location.hash = $(this).attr('id');
        });


        if (typeof twitterFeedUrl !== 'undefined') {
            $.getJSON(twitterFeedUrl, function(data) {
                $.each(data, function(i, gist) {
                    var tweetElement = '<div class="tweet animated fadeInUp hidden"><p class="tweet-text">' + linkify(gist.text) + '</p><p class="tweet-meta">by <a href="https://twitter.com/' + gist.user.screen_name + '" target="_blank">@' + gist.user.screen_name + '</a></p></div>';
                    $('#tweets').append(tweetElement);
                });
                animateTweets();
            });

            function linkify(inputText) {
                var replacedText, links1, links2, hashtags, profileLinks;
                links1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
                replacedText = inputText.replace(links1, '<a href="$1" target="_blank">$1</a>');
                links2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
                replacedText = replacedText.replace(links2, '$1<a href="http://$2" target="_blank">$2</a>');
                hashtags = /#(\S*)/g;
                replacedText = replacedText.replace(hashtags, '<a href="https://twitter.com/search?q=%23$1" target="_blank">#$1</a>');
                profileLinks = /\B@([\w-]+)/gm;
                replacedText = replacedText.replace(profileLinks, '<a href="https://twitter.com/$1" target="_blank">@$1</a>');
                return replacedText;
            }

            function animateTweets() {
                var $tweets = $('#tweets').find('.tweet'),
                    i = 0;
                $($tweets.get(0)).removeClass('hidden');
                function changeTweets() {
                    var next = (++i % $tweets.length);
                    $($tweets.get(next - 1)).addClass('hidden');
                    $($tweets.get(next)).removeClass('hidden');
                }
                var interval = setInterval(changeTweets, 5000);
            }
        }
    });

    //Google plus
    function initGooglePlus() {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = 'https://apis.google.com/js/platform.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
    }

    // Google maps static
    if (typeof staticGoogleMaps !== 'undefined') {
        $('#canvas-map').addClass('image-section').css('background-image','url(https://maps.googleapis.com/maps/api/staticmap?zoom=17&center=' + mobileCenterMapCoordinates +'&size=' + $(window).width() + 'x700&scale=2&language=en&markers=icon:' + icon +'|'+ eventPlaceCoordinates +'&maptype=roadmap&style=visibility:on|lightness:40|gamma:1.1|weight:0.9&style=element:labels|visibility:off&style=feature:water|hue:0x0066ff&style=feature:road|visibility:on&style=feature:road|element:labels|saturation:-30)');
    }

    //Google maps
    if (typeof googleMaps !== 'undefined') {
        var map, autocomplete, directionsDisplay, geocoder, polyline, origin;
        var markers = [];
        var directionsService = new google.maps.DirectionsService();
        var MY_MAPTYPE_ID = 'custom_style';

        function initialize() {
            directionsDisplay = new google.maps.DirectionsRenderer({
                suppressMarkers: true
            });
            geocoder = new google.maps.Geocoder();

            polyline = new google.maps.Polyline({
                strokeColor: '#03a9f4',
                strokeOpacity: 1,
                strokeWeight: 2
            });

            var defaultOpts = 
                // NeonWorld
                //[{"stylers":[{"saturation":100},{"gamma":0.6}]}]; 

                // Midnight Minimal
                //[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0e5166"},{"lightness":5}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#7aecff"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#e7ff00"},{"visibility":"on"},{"weight":"0.90"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#2aff00"},{"visibility":"on"},{"weight":"0.80"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16},{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#00ab69"},{"weight":"0.80"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#ff0000"},{"weight":"0.90"}]},{"featureType":"transit","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#ff6300"}]},{"featureType":"transit","elementType":"labels.icon","stylers":[{"visibility":"on"},{"color":"#ff3f00"},{"weight":"0.80"}]},{"featureType":"transit.station.bus","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.bus","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.bus","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#010a33"}]}];
                
                // Greyscale
                [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}];
                
                // PipBoy Map
                //[{"featureType":"water","elementType":"all","stylers":[{"hue":"#0B1E0C"},{"saturation":2},{"lightness":-89},{"visibility":"simplified"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"hue":"#0B1E0C"},{"saturation":26},{"lightness":-91},{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"hue":"#0B1E0C"},{"saturation":37},{"lightness":-92},{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"hue":"#0B1E0C"},{"saturation":6},{"lightness":-90},{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"hue":"#0B1E0C"},{"saturation":26},{"lightness":-91},{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"hue":"#00FF00"},{"saturation":100},{"lightness":-22},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"hue":"#00FF00"},{"saturation":100},{"lightness":-22},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"hue":"#00FF00"},{"saturation":100},{"lightness":-35},{"visibility":"on"}]},{"featureType":"road.local","elementType":"all","stylers":[{"hue":"#00FF00"},{"saturation":100},{"lightness":-50},{"visibility":"on"}]},{"featureType":"administrative","elementType":"all","stylers":[{"hue":"#00FF00"},{"saturation":100},{"lightness":-2},{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"hue":"#00FF00"},{"saturation":100},{"lightness":-36},{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"hue":"#00FF00"},{"saturation":100},{"lightness":50},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#00FF00"},{"saturation":100},{"lightness":-36},{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"hue":"#00FF00"},{"saturation":100},{"lightness":-41},{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[]}];

                // SAAB Navigation
                //[{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"geometry","stylers":[{"color":"#004600"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"saturation":"62"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":"1.81"},{"lightness":"100"},{"saturation":"100"},{"color":"#00ff0b"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"saturation":"-100"},{"lightness":-33},{"weight":"2.53"},{"gamma":0.8},{"color":"#061d00"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":30},{"saturation":30}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"lightness":"-32"},{"saturation":"48"},{"color":"#000000"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},{"saturation":-20}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"lightness":"24"},{"saturation":"100"},{"color":"#39ff00"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#2bff00"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"weight":"4.46"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"saturation":"100"},{"lightness":"12"},{"color":"#148400"}]},{"featureType":"water","elementType":"all","stylers":[{"lightness":-20}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"lightness":"-100"},{"color":"#001a03"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"weight":"1.70"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#2bff00"}]}];

                // Cobalt V2
                //[{"featureType":"all","elementType":"all","stylers":[{"invert_lightness":true},{"saturation":10},{"lightness":30},{"gamma":0.5},{"hue":"#00aaff"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"saturation":"100"},{"lightness":"27"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#32373c"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"saturation":"100"},{"lightness":"69"},{"gamma":"1.40"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"lightness":"100"},{"saturation":"100"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.icon","stylers":[{"saturation":"100"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"saturation":"43"},{"lightness":"51"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"saturation":"45"},{"lightness":"19"}]}];
            /*[{
                stylers: [{
                    lightness: 40
                }, {
                    visibility: 'on'
                }, {
                    gamma: 0.9
                }, {
                    weight: 0.4
                }]
            }, {
                elementType: 'labels',
                stylers: [{
                    visibility: 'on'
                }]
            }, {
                featureType: 'water',
                stylers: [{
                    color: '#5dc7ff'
                }]
            }, {
                featureType: 'road',
                stylers: [{
                    visibility: 'off'
                }]
            }];*/

            var zoomedOpts = defaultOpts; 
            /*[{
                stylers: [{
                    lightness: 40
                }, {
                    visibility: 'on'
                }, {
                    gamma: 1.1
                }, {
                    weight: 0.9
                }]
            }, {
                elementType: 'labels',
                stylers: [{
                    visibility: 'off'
                }]
            }, {
                featureType: 'water',
                stylers: [{
                    color: '#5dc7ff'
                }]
            }, {
                featureType: 'road',
                stylers: [{
                    visibility: 'on'
                }]
            }, {
                featureType: 'road',
                elementType: "labels",
                stylers: [{
                    saturation: -30
                }]
            }];*/

            var mapOptions = {
                zoom: 17,
                minZoom: 2,
                scrollwheel: false,
                panControl: false,
                draggable: false,
                zoomControl: false,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_TOP
                },
                scaleControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                center: centerMap,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
                },
                mapTypeId: MY_MAPTYPE_ID
            };
            if ($(window).width() < 768) {
                mapOptions.center = mobileCenterMap;
            }
            if (googleMaps == 'logistics') {
                mapOptions.zoom = 5;
                mapOptions.zoomControl = true;
            }

            map = new google.maps.Map(document.getElementById('canvas-map'), mapOptions);
            var marker = new google.maps.Marker({
                position: eventPlace,
                animation: google.maps.Animation.DROP,
                icon: icon,
                map: map
            });
            markers.push(marker);
            var defaultMapOptions = {
                name: 'Default Style'
            };
            var zoomedMapOptions = {
                name: 'Zoomed Style'
            };
            var defaultMapType = new google.maps.StyledMapType(defaultOpts, defaultMapOptions);
            var zoomedMapType = new google.maps.StyledMapType(zoomedOpts, zoomedMapOptions);
            map.mapTypes.set('default', defaultMapType);
            map.mapTypes.set('zoomed', zoomedMapType);
            if (googleMaps === 'logistics') {
                map.setMapTypeId('default');
                var input = (document.getElementById('location-input'));
                autocomplete = new google.maps.places.Autocomplete(input);
                google.maps.event.addListener(autocomplete, 'place_changed', function() {
                    marker.setVisible(false);
                    var place = autocomplete.getPlace();
                    if (place.geometry == 'undefined' || !place.geometry) {
                        return;
                    }
                    var address = '';
                    if (place.address_components) {
                        address = [
                            (place.address_components[0] && place.address_components[0].short_name || ''), (place.address_components[1] && place.address_components[1].short_name || ''), (place.address_components[2] && place.address_components[2].short_name || '')
                        ].join(' ');
                    }
                    geocoder.geocode({
                        'address': address
                    }, function(results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            origin = results[0].geometry.location;
                            calcRoute(origin, 'TRANSIT');
                        } else {
                            alert('Geocode was not successful for the following reason: ' + status);
                        }
                    });
                });

            } else {
                map.setMapTypeId('zoomed');
            }

            function calcRoute(origin, selectedMode) {
                var request = {
                    origin: origin,
                    destination: eventPlace,
                    travelMode: google.maps.TravelMode[selectedMode]
                };
                directionsService.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        map.setMapTypeId('zoomed');
                        directionsDisplay.setMap(map);
                        directionsDisplay.setDirections(response);
                        var leg = response.routes[0].legs[0];
                        makeMarker(leg.start_location);
                        makeMarker(leg.end_location);
                        $('#distance').text(leg.distance.text);
                        $('#estimateTime').text(leg.duration.text);
                        $('#mode-select').val(selectedMode);
                        $('#mode').removeClass('hidden');
                        var attribute = $('#mode-icon use').attr('xlink:href');
                        attribute = attribute.substring(0, attribute.indexOf('#') + 1) + 'icon-' + selectedMode.toLowerCase();
                        $('#mode-icon use').attr('xlink:href', attribute);
                    } else if (status != google.maps.DirectionsStatus.OK && selectedMode != 'DRIVING') {
                        calcRoute(origin, 'DRIVING');
                    } else {
                        var path = polyline.getPath();
                        path.push(origin);
                        path.push(eventPlace);
                        makeMarker(origin);
                        makeMarker(eventPlace);
                        var bounds = new google.maps.LatLngBounds();
                        bounds.extend(origin);
                        bounds.extend(eventPlace);
                        map.fitBounds(bounds);
                        polyline.setMap(map);
                        var distance = Math.round(google.maps.geometry.spherical.computeDistanceBetween(origin, eventPlace) / 1000);
                        $('#distance').text(distance + ' km');
                        $('#estimateTime').text('');
                        $('#find-flight').removeClass('hidden');
                        $('#mode').addClass('hidden');
                    }
                });
                deleteMarkers();
                $('#find-way').addClass('location-active');
                setDirectionInput(origin);
                $('#find-way h3').removeClass('fadeInUp').addClass('fadeOutDown');
            }
            
            function calcRouteFromMyLocation() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position) {
                        origin = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                        calcRoute(origin, 'TRANSIT');
                    });
                }
            }

            function makeMarker(position) {
                var directionMarker = new google.maps.Marker({
                    position: position,
                    map: map,
                    icon: icon
                });
                markers.push(directionMarker);
            }

            function addMarker(location) {
                var marker = new google.maps.Marker({
                    position: location,
                    map: map
                });
                markers.push(marker);
            }

            function deleteMarkers() {
                for (var i = 0; i < markers.length; i++) {
                    markers[i].setMap(null);
                }
                markers = [];
            }

            function smoothZoom(level) {
                var currentZoom = map.getZoom(),
                    timeStep = 50;
                var numOfSteps = Math.abs(level - currentZoom);
                var step = (level > currentZoom) ? 1 : -1;
                for (var i = 0; i < numOfSteps; i++) {
                    setTimeout(function() {
                        currentZoom += step;
                        map.setZoom(currentZoom);
                    }, (i + 1) * timeStep);
                }
            }

            function setDirectionInput(origin) {
                geocoder.geocode({
                    'latLng': origin
                }, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK && results[1]) {
                        var arrAddress = results[1].address_components;
                        $.each(arrAddress, function(i, address_component) {
                            if (address_component.types[0] == "locality") {
                                $('#result-name').text(address_component.long_name);
                                return false;
                            }
                        });
                    }
                });
            }

            $('#mode-select').change(function() {
                var selectedMode = $(this).val();
                calcRoute(origin, selectedMode);
            });

            $("#direction-locate").click(calcRouteFromMyLocation);

            $("#direction-cancel").click(function() {
                $('#find-way').removeClass('location-active');
                $('#location-input').val('');
                $("#find-flight").addClass('hidden');
                deleteMarkers();
                directionsDisplay.setMap(null);
                polyline.setMap(null);
                map.setMapTypeId('default');
                map.panTo(eventPlace);
                if ($(window).width() < 768) {
                    map.setCenter(mobileCenterMap);
                } else {
                    map.setCenter(centerMap);
                }
                makeMarker(eventPlace);
                smoothZoom(5);
                $('#find-way h3').removeClass('fadeOutDown').addClass('fadeInUp');
            });

            if (typeof autoDirectionEnabled !== 'undefined' && autoDirectionEnabled == true) {
                calcRouteFromMyLocation();
            }
        }

        google.maps.event.addDomListener(window, 'load', initialize);
    }

})(jQuery);
