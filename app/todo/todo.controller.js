(function() {
    'use strict';

    angular
        .module('app')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['todoFactory'];

    /* @ngInject */
    function TodoController(todoFactory) {
        vm.sortField = " ";

        vm.todos = [

        ];
        vm.priorities = [{
                text: 'High',
                number: 3,
                style: 'list-group-item-danger'
            },
            {
                text: 'Medium',
                number: 2,
                style: 'list-group-item-warning'
            },
            {
                text: 'low',
                number: 1,
                style: 'list-group-item-success'
            }
        ];
        vm.click = function click() {
            vm.todos.push(vm.newTodo);
            vm.newTodo = {};
            console.log(vm.newTodo);
        }

    }


})();
