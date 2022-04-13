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
    todosPage.typeAnewTodo("Cucumber");
  });

  it.only("Completar una tarea", () => {
    todosPage.selectOneTodo(":nth-child(2) > .view > .toggle");
    cy.get(":nth-child(2)").should("have.class", "completed");
    cy.get(":nth-child(2) > .view > .toggle").should("be.checked");
    cy.get(".completed").should("have.css", "font-size", "24px");
    // cy.get(".completed > label").should(
    //   "have.css",
    //   "text-decoration",
    //   "line-through"
    // );
  });

  it("Borrar una tarea", () => {
    todosPage.deleteOneTodo(":nth-child(2) > .view > .destroy");
  });

  it("Mostrar todas las tareas", () => {
    todosPage.checkAllTodos(":nth-child(2) > a");
  });

  it("Revisar tareas activas", () => {
    todosPage.checkActiveTodos(":nth-child(2) > a");
  });

  it("Mostrar tareas completadas", () => {
    todosPage.checkActiveTodos(":nth-child(3) > a");
  });
});
