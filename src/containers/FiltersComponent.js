import React, { Component } from 'react';
import { connect } from 'react-redux';
import { capitalize } from '../capitalize';
import professions from '../utils/professions';

class FiltersComponent extends Component {
  state = {
    name: '',
    age: '',
    professions: '',
    friends: '',
    showGnomes: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]:
        e.target.name === 'name' ? capitalize(e.target.value) : e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: '/filteredGnomes',
      state: { filteredGnomes: this.getFilteredResults() }
    });
  };

  getFilteredResults() {
    return this.props.gnomes.filter(gnome => {
      if (!gnome.name.includes(this.state.name)) {
        return false;
      }
      if (
        this.state.professions !== '' &&
        !gnome.professions.includes(this.state.professions)
      ) {
        return false;
      }
      if (!this.isWithinAgeRange(gnome.age)) {
        return false;
      }
      if (
        this.state.friends !== '' &&
        !gnome.friends.includes(this.state.friends)
      ) {
        return false;
      }
      return true;
    });
  }

  isWithinAgeRange(age) {
    switch (this.state.age) {
      case '0 - 100':
        return age >= 0 && age <= 100;
      case '100 - 200':
        return age > 100 && age <= 200;
      case '200+':
        return age > 200;
      default:
        return true;
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Gnome Name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <label>
            Age:
            <select
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            >
              <option value="">-- Choose Age Range --</option>
              <option value="0 - 100">0 - 100</option>
              <option value="100 - 200">100 - 200</option>
              <option value="200+">200+</option>
            </select>
          </label>
          <label>
            Professions:
            <select
              name="professions"
              value={this.state.professions}
              onChange={this.handleChange}
            >
              {professions.map(profession => {
                return (
                  <option value={profession} key={profession + Math.random()}>
                    {profession}
                  </option>
                );
              })}
            </select>
          </label>
          <label>
            Friend Of:
            <input
              type="text"
              name="friends"
              placeholder="Gnome Friends"
              onChange={this.handleChange}
              value={this.state.friends}
            />
          </label>
          <div className="results">
            <h2>Gnomes Found: {this.getFilteredResults().length}</h2>
          </div>
          <button type="submit">Show Results</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  gnomes: store.gnomes.gnomes
});

export default connect(mapStateToProps)(FiltersComponent);
