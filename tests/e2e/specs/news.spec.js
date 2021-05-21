import db from '../../../src/services/_dexie'

import articles from '../../fixtures/articles.json'
import requests from '../../fixtures/requests.json'

describe("News", () => {

  before(async () => {
    await db.articles.bulkAdd(articles)
  })

  beforeEach(() => {
    cy.intercept('GET', '**/science.json**', { data: requests.science.data })
      .as('scienceArticlesRequest')
    cy.intercept('GET', '**/technology.json**', { data: requests.technology.data })
      .as('technologyArticlesRequest')
    
    cy.visit('/')
    
    cy.wait('@scienceArticlesRequest')
    cy.wait('@technologyArticlesRequest')
  })

  after(() => {
    db.delete()
  })

  context("Header", () => {
    it('opens The New York Times on logo click', () => {
      cy.get('.header a')
        .should('have.attr', 'href', 'https://www.nytimes.com/')
        .and('have.attr', 'target', '_blank')
    })
  })

  context("Navbar", () => {
    it("properly renders on load", () => {
      cy.get('.navbar nav a')
        .should('have.length', 3)

      cy.get('.navbar h1')
        .should('contain', 'all news')
      cy.get('.navbar nav a.selected')
        .should('contain', 'all news')
        .should('have.length', 1)
        
      cy.visit('/topic/science')

      cy.get('.navbar h1')
        .should('contain', 'science')
      cy.get('.navbar nav a.selected')
        .should('contain', 'science')
        .should('have.length', 1)
    })

    it("changes route on tab click", () => {
      cy.get('.navbar nav a')
        .contains('technology')
        .click()

      cy.location('pathname')
        .should('be.equal', '/topic/technology')
      cy.get('.navbar h1')
        .should('contain', 'technology')
      cy.get('.navbar nav a.selected')
        .should('contain', 'technology')
        .should('have.length', 1)

      cy.get('.navbar nav a')
        .contains('all news')
        .click()

      cy.location('pathname')
        .should('be.equal', '/')
      cy.get('.navbar h1')
        .should('contain', 'all news')
      cy.get('.navbar nav a.selected')
        .should('contain', 'all news')
        .should('have.length', 1)
    })
  })

  context("Button Return To Top", () => {
    it("returns scrollbox to top on click", () => {
      cy.get('.scrollbox')
        .invoke('attr', 'style', 'scroll-behavior: auto')

      cy.get('.scrollbox')
        .scrollTo('bottom')

      cy.get('.scrollbox')
        .then(([scrollbox]) => {
          expect(scrollbox.scrollTop).not.to.be.equal(0)  
        })

      cy.get('.button.return-to-top')
        .click()

      cy.get('.scrollbox')
        .then(([scrollbox]) => {
          expect(scrollbox.scrollTop).to.be.equal(0)  
        })
    })
  })

  context("Article Modal", () => {
    it("opens on list item click", () => {
      cy.get('.modal')
        .should('not.exist')
        
      cy.get('.article.list__item')
        .first()
        .click()
        
      cy.get('.modal')
        .should('be.visible')
    })

    context("when open", () => {
      beforeEach(() => {
        cy.get('.article.list__item')
          .first()
          .click()
      })

      it("closes on click outside", () => {
        cy.get('.modal')
          .trigger('mouseup')

        cy.get('.modal')
          .should('be.visible')
          
        cy.get('.modal__content')
          .click()
          
        cy.get('.modal')
          .should('be.visible')

        cy.get('.modal')
          .click({ force: true })
        
        cy.get('.modal')
          .should('not.exist')
      })

      it("closes on close button click", () => {
        cy.get('.modal__closer')
          .click()
        
        cy.get('.modal')
          .should('not.exist')
      })
    })
  })

  context("Article List", () => {
    it("renders skeleton loader while not loaded all articles", () => {
      cy.get('.article.list__item--skeleton')
        .should('have.length', 10)
      
      cy.get('.scrollbox')
        .scrollTo('bottom')
      
      cy.get('.article.list__item--skeleton')
        .should('not.exist')
    })

    it("renders ten articles on load", () => {
      cy.get('.article.list__item')
        .should('have.length', 10)
    })
    
    it("loads more articles on scroll bottom", () => {
      cy.get('.article.list__item')
        .should('have.length', 10)

      cy.get('.scrollbox')
        .scrollTo('bottom')

      cy.get('.article.list__item')
        .should('have.length', 19)
    })

    context("when topic articles", () => {
      it("renders just the selected topic articles", () => {
        cy.visit('/topic/technology')
        
        cy.get('.article.list__item')
          .should('have.length', 10)
          
        cy.visit('/topic/science')
          
        cy.get('.article.list__item')
          .should('have.length', 9)
      })
    })
  })
})
