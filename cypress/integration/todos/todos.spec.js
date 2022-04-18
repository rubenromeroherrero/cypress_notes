/// <reference types="cypress" />

import { TodosPage } from "../../page-objects/todos/todos-page";

describe("todos tests", () => {
  const todosPage = new TodosPage();

  beforeEach(() => {
    cy.visit("http://todomvc-app-for-testing.surge.sh/");
    todosPage.typeAnewTodo("Selenium");
    todosPage.typeAnewTodo("Cypress");
  });

  it("Introducir tarea", () => {
    //Introducir nueva tarea
    todosPage.typeAnewTodo("Cucumber");
    // Comprobar longitud del ul
    todosPage.checkLengthOfNumberOfTodos(3);
  });

  it("Completar una tarea", () => {
    todosPage.selectOneTodo(":nth-child(2) > .view > .toggle");
    todosPage.selectOneTodoAndValidateCompletedClass();
    //comprobar que esté marcado
    todosPage.checkIfTodoIsChecked(":nth-child(2) > .view > .toggle");
  });

  it("Borrar una tarea", () => {
    todosPage.deleteOneTodo(":nth-child(2) > .view > .destroy");
    todosPage.checkLengthOfNumberOfTodos(1);
  });

  it("Mostrar todas las tareas", () => {
    todosPage.checkAllTodos(":nth-child(2) > a");
    todosPage.checkEqualContentOfTodos();
  });

  it("Revisar tareas activas", () => {
    todosPage.selectOneTodo(":nth-child(2) > .view > .toggle");
    todosPage.checkActiveTodos(":nth-child(2) > a");
    todosPage.checkLengthOfNumberOfTodos(1);
  });

  it("Mostrar tareas completadas", () => {
    todosPage.checkActiveTodos(":nth-child(3) > a");
    todosPage.checkLengthOfNumberOfTodos(0);
  });
});
