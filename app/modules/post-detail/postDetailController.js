(function () {
    'use strict';

    angular
        .module('post.detail')
        .controller('PostDetailController', PostDetailController);

    PostDetailController.$inject = ['PostService', '$stateParams'];
    function PostDetailController(PostService, $stateParams) {
        var vm = this;
        vm.id = $stateParams.id;

        activate();

        ////////////////

        function activate() {
            console.log($stateParams)
            PostService.getDetail(vm.id)
                .then(onGetDetail)

            function onGetDetail(post) {
                vm.post = post
            }
        }
    }
})();