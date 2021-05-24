import Dexie from 'dexie'

console.log('dexie', process.env.NODE_ENV)

const db = new Dexie('vue-news-portal-TEST')
// const db = new Dexie('vue-news-portal')

db.version(1).stores({
  articles: 'id, topic, uri'
})

db.open()

export default db
