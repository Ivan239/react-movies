import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };

  handleUpdate = (e) => {
    this.setState({ search: e.target.value });
  };

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.update(this.state.search, this.state.type);
    }
  };

  handleSearch = () => {
    this.props.update(this.state.search, this.state.type);
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.update(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div search={this.state.search} className="row">
        <div className="col s12">
          <div className="input-field inline" />
          <input
            placeholder="search"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={this.handleUpdate}
            onKeyDown={this.handleKey}
          />

          <button
            className="waves-effect waves-light btn search-btn"
            onClick={this.handleSearch}
          >
            Search
          </button>
        </div>
        <form action="#">
          <p>
            <label>
              <input
                className="with-gap"
                name="group1"
                type="radio"
                data-type="all"
                checked={this.state.type === 'all'}
                onChange={this.handleFilter}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="group1"
                type="radio"
                data-type="movie"
                checked={this.state.type === 'movie'}
                onChange={this.handleFilter}
              />
              <span>Movies</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="group1"
                type="radio"
                data-type="series"
                checked={this.state.type === 'series'}
                onChange={this.handleFilter}
              />
              <span>Series</span>
            </label>
          </p>
        </form>
      </div>
    );
  }
}

export { Search };
