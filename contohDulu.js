const login = (email, password) => {

cy.visit("/login");

cy.get("#email").type(email);

cy.get("#password").type(password);

cy.get("button[type='submit']").click();

};

describe("Test Login", () => {

it("Berhasil login dan masuk dashboard", () => {

// Panggil arrow function login

login("user@example.com", "password123");

});

})