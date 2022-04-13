/// <reference types="cypress" />

export class TodosPage {
  typeAnewTodo(todo) {
    cy.get(".new-todo").type(todo).type("{enter}");
  }

  selectOneTodo(numberTodo) {
    cy.get(numberTodo).click();
  }

  deleteOneTodo(numberTodoToDelete) {
    //forzamos que esté activo
    // cy.get(numberTodoToDelete).click({ force: true });
    //invoke => lo forzamos a que esté visible el botón
    cy.get(numberTodoToDelete).invoke("show").click();
  }

  checkAllTodos(allOption) {
    cy.get(allOption).click();
  }

  checkActiveTodos(activeOption) {
    cy.get(activeOption).click();
  }

  checkCompletedTodos(completedOption) {
    cy.get(completedOption).click();
  }
}
