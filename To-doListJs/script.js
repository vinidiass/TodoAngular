var app = angular.module('todoApp', []);

app.controller('TodoController', function ($scope) {
    $scope.newTask = '';
    $scope.tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    $scope.addTask = function () {
        console.log('salve salve')
        $scope.tasks.push({
            tarefa: $scope.newTask,
            concluida: false
        });
        $scope.newTask = '';
        $scope.showTasks();
    };

    $scope.showTasks = function () {
        localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    };

    $scope.completeTask = function (index) {
        console.log('ola mundo ');
        $scope.tasks[index].concluida = !$scope.tasks[index].concluida;
        $scope.showTasks();
    };
    
    $scope.deleteTask = function (index) {
        console.log('ola manoo ');
        $scope.tasks.splice(index, 1);
        $scope.showTasks();
    };
});
