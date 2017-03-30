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

        activate();

        function activate() {
            todoFactory
                .getAll()
                .then(function(data) {
                    vm.todos = data;
                });
        }

        vm.click = function click() {
            if (vm.text != undefined && vm.text.length > 0 && vm.selectedPriority != undefined) {
                todoFactory
                    .create({
                        "text": vm.text,
                        "priority": GetPriorityNumber(vm.selectedPriority)
                    })
                    .then(function(data) {
                        vm.todos.push(data);
                    });
            }
        }

        function GetPriorityNumber(priority) {
            if (priority === "High") {
                return 1;
            } else if (priority === "Medium") {
                return 2;
            } else if (priority === "Low") {
                return 3;
            }
        }

        vm.GetPriorityText = function GetPriorityText (priority) {
            switch (priority) {
                case 1:
                    return "high";
                case 2:
                    return "Medium";
                case 3:
                    return "High";
                default:
                    return "";
            }
        }
        vm.remove = function remove(index, todo) {
            console.log(todo);
            todoFactory
                .remove(todo.todoItemID)
                .then(function(data) {
                    vm.todos.splice(index, 1);
                });

        }
    }
})();
