import React, { Component } from "react";

class GifSearch extends Component {
  state = {
    query: "lol" // Set a default search query
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchGifs(this.state.query);
  };

  render() {
    const inputStyles = {
    };
    const buttonStyles = {
      padding: "5px 15px",
      marginLeft: "10px",
    };

    return (
      <div>
        <div style={{ textAlign: "left" }}>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.query}
              onChange={(event) => this.setState({ query: event.target.value })}
              placeholder="Search for GIFs"
              style={inputStyles}
            />
            <button type="submit" style={buttonStyles}>
              Search
            </button>
          </form>
        </div>
        <p>Click the search button to see the GIF, then replace the search input with any GIF keywords of your choice.</p>
      </div>
    );
  }
}

export default GifSearch;