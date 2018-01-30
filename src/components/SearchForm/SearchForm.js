import React from "react";
import PropTypes from 'prop-types';
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class SearchForm extends React.Component {

  render () {
    const { search, handleInputChange, breeds, handleFormSubmit } = this.props

    return (
      <div className="container">
      <div className="row">
      <div className="col-sm-12">
        
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h4 className="panel-title, text-center"><strong><i class="fa  fa-list-alt"></i>   Search </strong></h4>
          </div>
          <div class="panel-body">

      <form className="search">
        <div className="form-group">
          <label htmlFor="term">Search Term:</label>
          <input
            value={search}
            onChange={handleInputChange}
            name="search"
            type="text"
            className="form-control"
            placeholder=""
            id="searchTerm"
          />
        </div>
        </form>

      <form className="search">
        <div className="form-group">
          <label htmlFor="term">Number of Records to Retrieve:</label>
          <input
            value={search}
            onChange={handleInputChange}
            name="search"
            type="text"
            className="form-control"
            
            value="5" selected
            
            placeholder=""
            id="searchTerm"
          />
          </div>
          </form>

      <form className="search">
        <div className="form-group">
          <label htmlFor="term">Start Year(Optional):</label>
          <input
            value={search}
            onChange={handleInputChange}
            name="search"
            type="text"
            className="form-control"
            placeholder=""
            id="searchTerm"
          />
           </div>
          </form>

      <form className="search">
        <div className="form-group">
          <label htmlFor="term">End Year(Optional):</label>
          <input
            value={search}
            onChange={handleInputChange}
            name="search"
            type="text"
            className="form-control"
            placeholder=""
            id="searchTerm"
          />
           </div>
          </form>

          <datalist id="breeds">
            {breeds.map(breed => <option value={breed} key={breed} />)}
          </datalist>
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="btn btn-primary pull-right "
          >
            Search
          </button>
        </div>
      

      </div>
  </div>
  </div>
  </div>
  
    );
  }
}

SearchForm.props = {
  search: PropTypes.string,
  handleInputChange: PropTypes.func,
  breeds: PropTypes.string,
  handleFormSubmit: PropTypes.func
}

export default SearchForm;