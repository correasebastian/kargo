(function () {
    'use strict';

    angular
        .module('post.item')
        .directive('postItem', postItem);


    function postItem() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: PostItemController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                postId:'@',
                title:'@',
                onClickItem :'&'
            },
            replace: true,
            templateUrl: 'app/modules/post/post-item/item.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
    PostItemController.$inject = [];

    /* @ngInject */
    function PostItemController() {
        // alert('oelo')
    }
})();