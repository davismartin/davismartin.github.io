import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      React.DOM.div(null,
        <div>
          <MyTitle title='props are cool' color="rebeccapurple"/>
          <MyTitle title='props are cool' color="rebeccapurple"/>
          <MyTitle title='props are cool' color="rebeccapurple"/>
        </div>
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
