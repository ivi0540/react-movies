import { type } from "@testing-library/user-event/dist/type";
import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  };

  handelFilter = (event) => {
    this.setState(()=>({ type: event.target.dataset.type }), ()=>{
        this.props.searchMovie(this.state.search, this.state.type);
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field searchContainer">
            <input
              className="validate"
              placeholder="Search"
              type="search"
              value={this.state.search}
              onChange={(e) => {
                this.setState({ search: e.target.value });
              }}
              onKeyDown={this.handleKey}
            />
            <button
              onClick={() => {
                this.props.searchMovie(this.state.search, this.state.type);
              }}
            >
              Search
            </button>
          </div>
          <div>
            <label>
              <input
                name="type"
                type="radio"
                className="with-gap"
                data-type="all"
                onChange={this.handelFilter}
                checked={this.state.type === "all"}
              />
              <span>All</span>
            </label>
            <label>
              <input
                name="type"
                type="radio"
                className="with-gap"
                data-type="movie"
                onChange={this.handelFilter}
                checked={this.state.type === "movie"}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                name="type"
                type="radio"
                className="with-gap"
                data-type="series"
                onChange={this.handelFilter}
                checked={this.state.type === "series"}
              />
              <span>Series only</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export { Search };
