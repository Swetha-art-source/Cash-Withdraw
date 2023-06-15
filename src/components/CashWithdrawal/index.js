// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: 2000,
    }
  }

  handleDenominationClick = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="container">
        <div className="balance-container">
          <div className="name-container">
            <div className="logo">
              <span className="text">S</span>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-details-container">
            <div>
              <p className="balance">Your Balance</p>
            </div>
            <div>
              <p className="balance-amount">{balance}</p>
              <p className="balanceInRupee">In Rupees</p>
            </div>
          </div>
          <div>
            <p className="heading">Withdraw</p>
            <p className="para">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="denominations">
            {denominationsList.slice(0, 4).map(denomination => (
              <li key={denomination.id}>
                <DenominationItem
                  value={denomination.value}
                  onClick={this.handleDenominationClick}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
