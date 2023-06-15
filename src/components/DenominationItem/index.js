// Write your code here
import './index.css'

const DenominationItem = ({value, onClick}) => (
  <button className="btn" type="button" onClick={() => onClick(value)}>
    {value}
  </button>
)

export default DenominationItem
