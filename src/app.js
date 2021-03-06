var loaded=false;
angular
    .module('MUN', ['ui.router','ngMaterial', 'MUN.controllers', 'MUN.routes','sasrio.angular-material-sidenav'])
    .config(function($$mdSvgRegistry,$mdThemingProvider, $mdIconProvider,ssSideNavSectionsProvider){


        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu"       , "./assets/svg/menu.svg"        , 24)
            .icon("logo"       , "./assets/svg/logo.svg"        , 42)
            .icon("share"      , "./assets/svg/share.svg"       , 24)
            .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
            .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
            .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
            .icon("phone"      , "./assets/svg/phone.svg"       , 512)
            .icon('md-toggle-arrow', $$mdSvgRegistry.mdToggleArrow);

        $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('blue');

        var sections=[];
        for(var i in links){
            var temp={
                'id':'link'+i,
                'name':links[i].t,
                'state':links[i].t,
                'type':'link'
            };
            sections.push(temp);
        }
        for(i in menus){
            var temp={
                id:     'toogle_'+i,
                name:   menus[i].t,
                type:   'toggle',
                pages: []
            };      
            for(j in menus[i].l) {
                temp.pages.push({
                    id:     'toggle_item_'+i+j,
                    name:   menus[i].l[j].t,
                    state:  menus[i].l[j].t
                });
            }
            sections.push(temp);
        }
        ssSideNavSectionsProvider.initWithTheme($mdThemingProvider);
        ssSideNavSectionsProvider.initWithSections(sections);

    }).run(function($rootScope, $mdSidenav, ssSideNav, $mdDialog, $sce){
        $rootScope.links = links;
        $rootScope.menus = menus;
        $rootScope.menu = ssSideNav;
        $rootScope.secretariat = secretariat;
        $rootScope.councils = councils;
        $rootScope.letter = letter;
        $rootScope.openMenu = function(){
            $mdSidenav('left').toggle();
        };
        $rootScope.renderHtml = function(html_code)
        {
            return $sce.trustAsHtml(html_code);
        };
        $rootScope.openForm = function(ev){
            $mdDialog.show({
              // controller: DialogController,
              template: '<iframe style="width:90vh; height:90vh" src="https://iiithmun.typeform.com/to/cd67cV?typeform-embed=embed-widget"></iframe>',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose:true,
              fullscreen: false // Only for -xs, -sm breakpoints.
            })
            .then(function(answer) {

            }, function() {
            });
        };


    }).config( function($mdThemingProvider){
// Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();   });