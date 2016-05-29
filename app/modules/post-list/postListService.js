(function () {
    'use strict';

    angular
        .module('kargo.postList')
        .factory('PostService', PostService);

    PostService.$inject = ['$http', '$q'];
    function PostService($http, $q) {
        var postUrl = 'http://jsonplaceholder.typicode.com/posts/';
        var list = [];
        var service = {
            getList: getList,
            getDetail: getDetail
        };

        return service;

        ////////////////
        function getList() {
            if (list.length)
                return $q.when(list)

            return $http.get(postUrl)
                .then(onGetList)

            function onGetList(res) {
                if (Array.isArray(res.data))
                    list = res.data;
                return list
            }

        }

        function getDetail(postId) {
            return $http.get(postUrl + postId)
                .then(onGetDetail)

            function onGetDetail(res) {
                return res.data;
            }
        }
    }
})();