// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {listOfElements, displayFullSuggestion} = props
  const {suggestion, id} = listOfElements
  const displaySuggestion = () => {
    displayFullSuggestion(id)
  }
  return (
    <li className="list-item">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow-image"
        alt="arrow"
        onClick={displaySuggestion}
      />
    </li>
  )
}

export default SuggestionItem
