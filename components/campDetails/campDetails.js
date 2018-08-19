application.component('campDetails', {
    templateUrl: 'components/campDetails/campDetails.html',
    bindings: {
        input: '<'
    },
    controller: function ($filter) {
        var self = this;
        this.$onInit = function() {
            self.requirementList = [
                {
                    title : "Rice",
                    lastUpdatedOn : new Date(),
                    quantity : 10,
                    unit : "Kg",
                    severity : "Medium",
                    status : "Not Received"
                },
                {
                    title : "Sugar",
                    lastUpdatedOn : new Date(),
                    quantity : 5,
                    unit : "Kg",
                    severity : "Medium",
                    status : "Not Received"
                },
                {
                    title : "Mug",
                    lastUpdatedOn : new Date(),
                    quantity : 10,
                    unit : "item",
                    severity : "High",
                    status : "Committed"
                },
                {
                    title : "Bucket",
                    lastUpdatedOn : new Date(),
                    quantity : 20,
                    unit : "item",
                    severity : "Low",
                    status : "Received"
                }
            ];
        }
    }
});
