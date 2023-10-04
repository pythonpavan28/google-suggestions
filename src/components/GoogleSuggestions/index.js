// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    const filteredList = event.target.value
    this.setState({searchInput: filteredList})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const filteredList = suggestionsList.filter(eachValue =>
      eachValue.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const displayFullSuggestion = id => {
      const filterList = suggestionsList.filter(eachList => eachList.id === id)
      this.setState({searchInput: filterList.suggestion})
    }

    return (
      <div className="bg-container">
        <div className="google-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="image"
          />
          <div className="suggestions-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                value={searchInput}
                placeholder="Search Google"
                className="inputElement"
                onChange={this.onChangeInput}
              />
            </div>
            <ul className="list-container">
              {filteredList.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  listOfElements={eachItem}
                  displayFullSuggestion={displayFullSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
