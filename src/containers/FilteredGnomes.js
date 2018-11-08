import React, { Component } from 'react';
import Gnomelist from '../components/Gnomelist';

class FilteredGnomes extends Component {
  render() {
    return (
      <div className="filtered_gnomes">
        <Gnomelist gnomes={this.props.history.location.state.filteredGnomes} />
        <div className="buttons">
          <button onClick={() => this.props.history.goBack()}>
            Back To Filters
          </button>
          <button onClick={() => this.props.history.push('/')}>
            Back To Home
          </button>
        </div>
      </div>
    );
  }
}

export default FilteredGnomes;
