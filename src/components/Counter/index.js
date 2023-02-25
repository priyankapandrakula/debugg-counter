// eslint-disable-next-line no-unused-vars
import Component from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onDecrement = () => {
    this.setState(prev => ({count: prev.count - 1}))
  }

  onIncrement = () => {
    this.setState(prev => ({count: prev.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>
        <div>
          <button className="button" onClick={this.onIncrement} type="button">
            Increase
          </button>
          <button className="button" onClick={this.onDecrement} type="button">
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
