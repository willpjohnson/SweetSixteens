import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSearchResults } from '../../actions/search_actions';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchText: ""};

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.searchText !== nextProps.searchText) {
      this.setState({searchText: nextProps.searchText}, this.fetcher);
    }
  }

  fetcher() {
    this.props.fetchSearchResults(this.state.searchText);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({searchText: ""});
  }

  searchItems() {
    const items = this.props.results.map( (track, index) => {
      return(
        <li key={index}>
          <div onClick={this.handleClick} className="search-item-div">
            <Link className="search-item-link" to={`/tracks/${track.id}`}>
              <div className="search-item-info">
                <img className="search-item-image" src={track.image_url}></img>
                {track.title}
              </div>
            </Link>
          </div>
        </li>
      );
    });

    return items;
  }

  render() {
    const lis = this.searchItems();
    const displayBoolean = (this.props.results.length > 0 && this.state.searchText);
    const searchIndexClass = (displayBoolean ? "search-index-div" : "search-index-div hidden");

    return(
      <div className={searchIndexClass}>
        <ul className="search-results-list">
          {lis}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    results: state.search.tracks
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchSearchResults: (searchData) => {
      dispatch(fetchSearchResults(searchData));
    }
  });
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
