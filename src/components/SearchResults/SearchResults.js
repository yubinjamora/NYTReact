
import React from "react";
import PropTypes from 'prop-types';
import "./SearchResults.css";

class SearchResults extends React.Component {

  render () {
    const { results } = this.props

    return (
      <div className="container">
      <div className="row">
      <div className="col-sm-12">
        
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h4 className="panel-title, text-center"><strong>  Result </strong></h4>
          </div>
          <div class="panel-body">
      <ul className="list-group search-results">
        {results.map(result =>
          <li key={result} className="list-group-item">
            <img alt="Dog" src={result} className="img-responsive" />
          </li>
        )}
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

SearchResults.props = {
  results: PropTypes.array
}

export default SearchResults;