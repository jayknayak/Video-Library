import React, { Component } from "react";
import NavBar from "./components/navbar";
import Movies from "./components/movies";

class App extends Component {
  state = {
    moviesList: [
      { id: 1, value: 1 },
      // { id: 2, value: 1 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <main className="container">
          {this.state.moviesList.map((movies) => (
            <Movies key={movies.id}>
              {/*Passing contents to child components */}
              <h4>Movies List# {movies.id}</h4>
            </Movies>
          ))}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
