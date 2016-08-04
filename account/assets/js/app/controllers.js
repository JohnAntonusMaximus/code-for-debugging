app.controller('mainController',['$scope','$log', function($scope, $log){
    $scope.model = 'Main Controller';
    $log.info($scope.model);
}]);

app.controller('activityController',['$scope', '$log', function($scope, $log){
    $scope.model = 'Activity Controller';
    $log.info($scope.model);
}]);

app.controller('netPromoterController',['$scope', '$log', function($scope, $log){
    $scope.model = 'Net Promoter Controller';
    $log.info($scope.model);
}]);

app.controller('reportsController',['$scope', '$log', function($scope, $log){
    $scope.model = 'Reports Controller';
    $log.info($scope.model);
}]);

app.controller('understandingController',['$scope', '$log', function($scope, $log){
    $scope.model = 'Understanding Controller';
    $log.info($scope.model);
}]);

app.controller('devicesController',['$scope', '$log', function($scope, $log){
    $scope.model = 'Devices Controller';
    $log.info($scope.model);
}]);

app.controller('supportController',['$scope', '$log', function($scope, $log){
    $scope.model = 'Support Controller';
    $log.info($scope.model);
}]);

