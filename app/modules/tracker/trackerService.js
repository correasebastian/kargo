(function () {
    'use strict';

    angular
        .module('kargo.tracker')
        .factory('TrackerService', TrackerService);

    TrackerService.$inject = ['$http'];
    function TrackerService($http) {
        var baseurl = 'http://kargotest.herokuapp.com/api/trackers?from='
        var service = {
            getData: getData
        };

        return service;

        ////////////////
        function getData(star, end) {

            var startDate = star.toISOString().substring(0, 10)
            var endDate = end.toISOString().substring(0, 10)
            // var startDate = '2015-01-01'
            // var endDate = '2015-01-11'
            var completedUrl = baseurl + startDate + '&to=' + endDate
            debugger
            return $http.get(completedUrl)
                .then(onGetList)

            function onGetList(res) {
                var data = []
                if (Array.isArray(res.data.data))
                    data = sanitize(res.data.data, startDate, endDate);
                return data
            }
        }


        //sanitize data, in order to fix the bug
        function sanitize(data, start, end) {



            var sorted = data.sort(innerSort)

            function innerSort(a, b) {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            }
            //assuming no repeated dates in the array I can verify if is completed this way
            if (calculateDiff(start, end) === data.length)
                return data;

            //logic to complete data 
            var fixed = [];
            var latest = moment(start);
            var latestId = 0
            var init = false;
            var ended = false;

            // console.log(data)

            var completed = sorted.forEach(innerEach)
            function innerEach(obj) {
                debugger
                // var dif = calculateDiff(latest, obj.date)
                if (latest.isSame(obj.date)) {
                    fixed.push(obj);
                    latest.add(1, 'day');
                    latestId = obj.id
                    return
                }
                else {
                 
                    addToFixed(obj.date)

                }

            }

            if (!latest.isSame(end)) {
                addToFixed(end)
            }

            function addToFixed(date) {
                var diff = calculateDiff(latest, date);

                for (var i = 0; i <= diff; i++) {
                    var newObj = {
                        id: latestId += 1,
                        hits: 0,
                        date: latest.format('YYYY-MM-DD')
                    }
                    fixed.push(newObj);
                    latest.add(1, 'day')
                }
            }

            // console.log('fixed', fixed)
            return fixed;
        }

        function calculateDiff(mStart, end) {
            // var mStart = moment(start)
            var mEnd = moment(end)
            return mEnd.diff(mStart, 'days')
        }
    }
})();