import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      React.DOM.div(null,
        MyTitleFactory({title: 'props are the best', color: 'peru'}),
        MyTitleFactory({title: 'i different', color: 'mediumaquamarine'}),
        MyTitleFactory({title: 'props are the best', color: 'rebeccapurple'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
