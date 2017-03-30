(function() {
    'use strict';

    angular
        .module('app')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['todoFactory'];

    /* @ngInject */
    function TodoController(todoFactory) {

        var vm = this;

        vm.sortField = " ";
        vm.todos = [];
        vm.priorities = ['High',
            'Medium',
            'Low'
        ];

        vm.selectedPriotity = vm.priorities[0];


        vm.click = function click() {

            todoFactory
                .create({
                    "text": vm.text,
                    "priority": GetPriorityNumber(vm.selectedPriority)
                })
                .then(function(data) {
                    vm.todos.push(data);
                });

            function GetPriorityNumber(priority) {
                if (priority === "High") {
                    return 1;
                }
                if (priority === "Medium") {
                    return 2;
                }
                else {
                    return 3;
                }
            }
        }
    }


})();
