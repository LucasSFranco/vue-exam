import Dexie from 'dexie'

const db = new Dexie(process.env.VUE_APP_DATABASE || 'vue-news-portal')

db.version(1).stores({
  articles: 'id, abstract, byLine, kicker, multimedia, publishedDate, section, subsection, title, topic, uri, url'
})

db.open()

export default db
