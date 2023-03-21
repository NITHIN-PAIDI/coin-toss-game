import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    tossId: 0,
    total: 0,
    heads: 0,
    tails: 0,
  }

  changeCoin = () => {
    const {tossId, total, heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    const headsCount = tossResult === 0 ? 1 : 0
    const tailsCount = tossResult === 1 ? 1 : 0
    this.setState(preVlaue => ({
      tossId: tossResult,
      total: preVlaue.total + 1,
      heads: preVlaue.heads + headsCount,
      tails: preVlaue.tails + tailsCount,
    }))
  }

  render() {
    const {tossId, total, heads, tails} = this.state
    console.log(tossId)
    console.log(total)
    console.log(heads)
    console.log(tails)
    const imageUrl =
      tossId === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="bg-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imageUrl} className="image" alt="toss result" />
          <button type="button" className="button" onClick={this.changeCoin}>
            Toss coin
          </button>

          <div className="counter-container">
            <p className="counter"> Total: {total}</p>
            <p className="counter"> Heads: {heads}</p>
            <p className="counter"> Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
