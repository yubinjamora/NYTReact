
import React from "react";
import PropTypes from 'prop-types';
import "./SavedArticles.css";

class SavedArticles extends React.Component {

  render () {
    const { saved } = this.props

    return (
      <div className="container">
      <div className="row">
      <div className="col-sm-12">
        
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h4 className="panel-title, text-center"><strong>  Saved Articles </strong></h4>
          </div>
          <div class="panel-body">
      <ul className="list-group search-saved">
        
       
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

SavedArticles.props = {
  saved: PropTypes.array
}

export default SavedArticles;