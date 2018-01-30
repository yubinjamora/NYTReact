import React from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import SavedArticles from "../components/SavedArticles";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      breeds: [],
      results: [],
      error: ""
    };
  }

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getBaseBreedsList()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      
      <Container style={{ minHeight: "80%" }}>
      <Jumbotron>
              <h1 className="text-center">New York Times Article Scrubber</h1>
              <hr class="my-4"></hr>
              <h3 className="text-center">Search for and annotate articles of interest!</h3>
      </Jumbotron>
        
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          breeds={this.state.breeds}
        />
        <SearchResults results={this.state.results} />
        <SavedArticles saved={this.state.saved}/>
      </Container>
    );
  }
}

export default Search;