// Write your code here
import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

let searchResult = null

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSelectItem = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props

    const {searchInput} = this.state

    searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-img"
            alt="google logo"
          />
        </div>
        <div className="card-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-img"
              alt="search icon"
            />
            <input
              type="search"
              className="search-bar"
              placeholder="Search Google"
              onChange={this.onSearchInput}
              value={searchInput}
            />
          </div>
          <ul className="list-container">
            {searchResult.map(eachItem => (
              <SuggestionItem
                items={eachItem}
                onSelectItem={this.onSelectItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
