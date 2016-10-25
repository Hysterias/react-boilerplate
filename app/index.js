import React from 'react'
import ReactDOM  from 'react-dom'

var Main = React.createClass({
  render () {
    return (
      <div>
        <h1>Boilerplate App!!</h1>
      </div>
    )
  }
});

ReactDOM.render(
    <Main/>,
    document.getElementById('app')
);
