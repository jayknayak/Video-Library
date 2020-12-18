import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import _ from "lodash";
class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    sortColumn: { header: "title", order: "asc" },
  };
  constructor() {
    super();
    //console.log("constructor called");
    //Initializing component's state during the Mounting phase
    this.state.movies = getMovies();
  }
  getPaginatedData() {
    const filtered =
      this.state.currentGenre && this.state.currentGenre._id
        ? this.state.movies.filter(
            (movie) => movie.genre._id === this.state.currentGenre._id
          )
        : this.state.movies;
    const sorted = _.orderBy(
      filtered,
      [this.state.sortColumn.header],
      [this.state.sortColumn.order]
    );
    const movies = paginate(
      sorted,
      this.state.currentPage,
      this.state.pageSize
    );
    return { movies, filtered };
  }
  render() {
    if (this.state.movies.length === 0) {
      return <p>There are no movies in the database.</p>;
    }
    const { movies, filtered } = this.getPaginatedData();

    return (
      <div className="row">
        <div className="col-2">
          {
            /*Rendering contents received from parent component */
            this.props.children
          }
          <ListGroup
            genres={this.state.genres}
            currentGenre={this.state.currentGenre}
            // valueProperty="name"
            // keyProperty="_id"
            onGenreChange={this.handleGenreChange}
          ></ListGroup>
        </div>
        <div className="col">
          <p>Showing {movies.length} movies in the database.</p>
          <MoviesTable
            movies={movies}
            sortColumn={this.state.sortColumn}
            onLikeEvent={this.handleLikeClick}
            onDeleteEvent={this.deleteMovie}
            onSortEvent={this.handleSort}
          ></MoviesTable>
          <Pagination
            itemsCount={filtered.length}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
  handleLikeClick = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    //It is mandatory to clone the object in the argument as well
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  deleteMovie = (movie) => {
    //const remMovies = deleteMovie(movie._id);
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    // const currentPage = page;
    this.setState({ currentPage: page });
  };
  handleGenreChange = (genre) => {
    this.setState({ currentGenre: genre, currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  /*Mounting Phase
   Method called after the component is rendered in DOM
  To make ajax calls to get new data from server
   */
  componentDidMount() {
    //console.log("componentDidMount Method called");
    this.setState({ movies: getMovies() });
    const genres = [{ name: "All Genres", _id: 0 }, ...getGenres()];
    this.setState({ genres });
    this.setState({ currentGenre: genres[0] });
  }
}

export default Movies;
