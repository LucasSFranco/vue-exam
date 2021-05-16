import moment from 'moment'

class Article {

  constructor(data, topic) {
    this.topic = data?.topic ?? topic
    this.section = data.section
    this.subsection = data.subsection
    this.uri = data.uri
    this.title = data.title
    this.abstract = data.abstract
    this.url = data.url
    this.byline = data.byline
    this.publishedDate = data.published_date
    this.multimedia = {
      smallThumb: {
        url: data.multimedia[1].url,
        caption: data.multimedia[1].caption,
      },
    }
  }

  format(pattern = 'LLL') {
    return {
      ...this,
      publishedDate: moment(this.publishedDate).format(pattern)
    }
  }

}

export default Article
