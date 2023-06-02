/// <reference types="cypress" />

describe("Test of Stela website", () => {
    function addTreat() {
        cy.get("#treatButton").click()
    }

    beforeEach(() => {
        cy.visit("https://vikifelszeghy.github.io/Stela_web/")
    })

    it("Check title, h1 and picture", () => {
        cy.log("Title is correct")
        cy.title().should("eq", "Stela")

        cy.log("H1 is visible and has correct text")
        cy.get("h1").should("be.visible").and("have.text", "Stela")

        cy.log("Picture is visible")
        cy.get("[data-test=Obrazok1]").should("be.visible")
    })

    it("Verify functionality of the button Ako pochopit psa", () => {
        cy.log("Verify the button Ako pochopit psa")
        cy.get("#bookButton").should("contain.text", "Ako").and("be.visible")
        cy.get("[data-test=bookLink]").and("have.prop", "href", "https://www.martinus.sk/?uItem=40973").and("have.prop", "target", "_blank")
    })

    it("Check functionality of the button Daj Stele pamlsok", () => {
        cy.log("Verify the button Daj Stele pamlsok")
        cy.get("#treatButton").should("have.text", "Daj Stele pamlsok")
    })

    it("Verify treat counter", () => {
        cy.log("Verify correct default value and text")
        cy.get("#treatCounter").should("be.visible").eq(0)
        cy.get("#treatDescription").should("be.visible").and("have.text", "pamlskov")

        cy.log("Verify correct number and text after adding 1, 2 and 5 treats")
        addTreat()
        cy.get("#treatCounter").should("have.text", "1")
        cy.get("#treatDescription").should("be.visible").and("have.text", "pamlsok")
        addTreat()
        cy.get("#treatCounter").should("have.text", "2")
        cy.get("#treatDescription").should("be.visible").and("have.text", "pamlsky")
        addTreat()
        addTreat()
        addTreat()
        cy.get("#treatCounter").should("have.text", "5")
        cy.get("#treatDescription").should("be.visible").and("have.text", "pamlskov")

    })
})