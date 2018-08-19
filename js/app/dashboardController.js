application.controller('dashboardController',function($scope, $http, $timeout, $mdSidenav) {
    $scope.toggleLeft = buildDelayedToggler('district');
    $scope.toggleRight = buildToggler('right');
    $scope.toggleCamp = buildDelayedToggler('camp');
    $scope.openCamp = buildDelayedToggler('camp','open');
    $scope.closeCamp = buildDelayedToggler('camp','close');
    $scope.openDistrict = buildDelayedToggler('camp','open');
    $scope.closeDistrict = buildDelayedToggler('camp','close');
    $scope.selectedDistrict = "";
    $scope.pageFlag = "stateDetails";


    $scope.districtList = ["Alappuzha" , "Ernakulam" , "Idukki" , "Kannur" ,"Kasarkod" , "Kollam" , "Kottayam" , "Kozhikode" , "Malappuram" , "Palakkad" , "Pathanamthitta" , "Thiruvanathapuram" , "Thrissur" , "Wayanad"];
    $scope.isOpenRight = function(){
        return $mdSidenav('right').isOpen();
    };

    $scope.campList = ["Camp 1" , "Camp 2" , "Camp 3" , "Camp 4"]

    $scope.openCampDetails = function(district){
        $scope.selectedDistrict = district;
        $scope.pageFlag = "districtDetails";
        $scope.closeDistrict();
        $scope.openCamp();
    };
    $scope.closeCampDetails = function(){
        $scope.openDistrict();
        $scope.closeCamp();
    };

    $scope.showCampDetails = function(camp){
        $scope.selectedCamp = camp;
        $scope.input = {
            selectedDistrict : $scope.selectedDistrict,
            selectedCamp : $scope.selectedCamp
        }
        $scope.pageFlag = "campDetails";
    };



    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID,action) {
      return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
          if(action=='open'){
            $mdSidenav(navID)
              .open()
              .then(function () {});
          }else if(action=='close'){
              $mdSidenav(navID)
              .close()
              .then(function () {});
          }else{
              $mdSidenav(navID)
              .toggle()
              .then(function () {});
          }
      }, 200);
    }

    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
          });
      };
    }

    $scope.closeCamp();
  })
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('district').close()
        .then(function () {
        });

    };
  });
