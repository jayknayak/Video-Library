import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import MovieForm from "./components/movieForm";

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
          <Switch>
            <Route path="/movies/:id" component={MovieForm}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies"></Redirect>
            <Redirect to="/not-found"></Redirect>
          </Switch>
          {/* 
          {this.state.moviesList.map((movies) => (
            <Movies key={movies.id}>
              <h4>Movies List# {movies.id}</h4>
            </Movies>
          ))}  */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
