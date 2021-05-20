import Dexie from 'dexie'

const db = new Dexie('vue-news-portal--TEST')

db.version(1).stores({
  articles: 'id, topic, uri'
})

describe('News', () => {

  beforeAll(() => {
    db.open()
  })

  beforeEach(() => {
    cy.visit('/')
  })

  afterEach(() => {
    db.articles.clear()
  })

  afterAll(() => {
    db.close()
  })


  it.only('enters', () => {
    cy.get('All News')
      should('be.visible')
  })

})
