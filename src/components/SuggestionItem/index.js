// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {items, onSelectItem} = props

  const {suggestion} = items

  const onSelect = () => {
    onSelectItem(suggestion)
  }

  return (
    <li className="list-items-container">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="image"
        alt="arrow"
        onClick={onSelect}
      />
    </li>
  )
}

export default SuggestionItem
