import React from 'react'
import Header from './Header'

const {shape, string} = React.PropTypes
const Details = React.createClass({
  propTypes: {
    show: shape({
      title: string,
      year: string,
      poster: string,
      trailer: String()
    })
  },
  render () {
    const {title, description, year, poster, trailer} = this.props.show
    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          <img src={`/public/img/posters/${poster}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder='0' allowFullScreen />
        </div>
        {/* <pre><code>
          {JSON.stringify(this.props, null, 4)}
        </code></pre> */}
      </div>
    )
  }
})

export default Details
