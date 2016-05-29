(function () {
    'use strict';

    console.log('opstlist component')
    angular
        .module('post.list')
        .component('postList', {
            bindings: {
                detailState: '@',
                param: '@'
            },
            templateUrl: 'app/modules/post/post-list/list.html',
            controller: PostListController,
            controllerAs: 'vm'
        });

    PostListController.$inject = ['PostService', '$state'];

    /* @ngInject */
    function PostListController(PostService, $state) {

        var vm = this;
        vm.goToDetail = goToDetail

        vm.$onInit = init;

        function init() {
            console.log('init', vm);
            PostService.getList()
                .then(onGetList)

            function onGetList(posts) {
                vm.posts = posts
            }

        }

        function goToDetail(post) {
            debugger
            var params = {}
            params[vm.param] = post[vm.param]
            $state.go(vm.detailState, params)
        }


    }
})();