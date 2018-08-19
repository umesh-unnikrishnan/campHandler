application.component('requirementTile', {
    templateUrl: 'components/requirementTile/requirementTile.html',
    bindings: {
        requirement: '<',
        index: '<'
    },
    controller: function ($filter,$mdDialog) {
        var self = this;
        this.$onInit = function() {
            if(self.requirement.status=="Not Received")
                self.color = "#e53935";
            else if(self.requirement.status=="Committed")
                self.color = "#fdd835";
            else if(self.requirement.status=="Received")
                self.color = "#43a047";
        }
        this.donateNow = function(ev){
            $mdDialog.show({
                contentElement: '#donateNow',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: false
            });
        }
        this.hideDialog = function(){
            $mdDialog.hide({});
        }
    }
});
