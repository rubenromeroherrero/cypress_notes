/// <reference types="cypress" />

export class TodosPage {
  typeAnewTodo(todo) {
    cy.get(".new-todo").type(todo).type("{enter}");
  }

  selectOneTodo(numberTodo) {
    cy.get(numberTodo).click();
  }

  selectOneTodoAndValidateCompletedClass() {
    //checkeamos que se añada la clase completed
    cy.get(":nth-child(2)").should("have.class", "completed");
    cy.get(".completed").should("have.css", "font-size", "24px");
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

  checkLengthOfNumberOfTodos(number) {
    cy.get(".todo-list > li").should("have.length", number);
  }

  checkIfTodoIsChecked(numberOfTodoToCheck) {
    cy.get(numberOfTodoToCheck).should("be.checked");
  }

  checkFontSize() {
    cy.get(".completed").should("have.css", "font-size", "24px");
  }
}
