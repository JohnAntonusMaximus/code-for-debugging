// Routes

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '../account/pages/main.html',
            controller: 'mainController'
        })
        .when('/index', {
            templateUrl: '../account/pages/main.html',
            controller: 'mainController'
        })
        .when('/activity', {
            templateUrl: '../account/pages/activity.html',
            controller: 'activityController'
        })
        .when('/net-promoter', {
            templateUrl: '../account/pages/net-promoter.html',
            controller: 'netPromoterController'
        })
        .when('/reports', {
            templateUrl: '../account/pages/reports.html',
            controller: 'reportsController'
        })
        .when('/understanding', {
            templateUrl: '../account/pages/understanding.html',
            controller: 'understandingController'
        })
        .when('/devices', {
            templateUrl: '../account/pages/devices.html',
            controller: 'devicesController'
        })
        .when('/support', {
            templateUrl: '../account/pages/support.html',
            controller: 'supportController'
        })
});