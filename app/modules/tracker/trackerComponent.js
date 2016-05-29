var t; (function () {
    'use strict';

    console.log('tracker component')
    angular
        .module('kargo.tracker')
        .component('tracker', {

            templateUrl: 'app/modules/tracker/tracker.html',
            controller: TrackerController,
            controllerAs: 'vm'
        });

    TrackerController.$inject = ['TrackerService'];

    /* @ngInject */
    function TrackerController(TrackerService) {

        var vm = this;
        t = vm;
        vm.getTrackerData = getTrackerData



        function getTrackerData() {
            // alert()
            if (!vm.startingDate || !vm.endingDate)
                return


            TrackerService.getData(vm.startingDate, vm.endingDate)
                .then(onGetList)

            function onGetList(trackerData) {
                vm.trackerData = trackerData
            }
         

        }
    }
})();