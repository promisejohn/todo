'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('todoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have no todo to start', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should add one todo in list',function(){
    scope.todo='item1';
    scope.addTodo()
    expect(scope.todos.length).toBe(1);
  });

  it('should add then remove one item from the list',function(){
    scope.todo = 'item2';
    scope.addTodo();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  })
});
