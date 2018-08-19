application.controller('campAdminController',function($scope, $http, $timeout, $mdSidenav) {
    $scope.loggedInUser = {
        name : "Camp Admin",
        campName : "Kuttur LP School"
    }
    $scope.campDetails = {
        campName : "Kuttur LP School",
        headCount : 1530,
        male : 700,
        female : 600,
        kids : 230,
        notCategorised : 230
    }
    $scope.units = ["Kgs" ,"Ltrs" , "Nos"];
    $scope.severityList = ["High" ,"Medium" , "Low"];
    $scope.tempRequirement = {
        unit : $scope.units[0],
        severity : $scope.severityList[0]
    }
});
