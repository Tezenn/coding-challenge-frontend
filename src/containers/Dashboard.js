import React, { Component } from 'react';
import { loadAllGnomes } from '../redux/actions';
import { connect } from 'react-redux';
import './dashboard.css';
import Gnomelist from '../components/Gnomelist';

class Dashboard extends Component {
  state = {
    allGnome: false
  };
  componentDidMount() {
    if (this.props.store.gnomes.length === 0) {
      fetch(
        'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
      )
        .then(res => res.json())
        .then(res => this.props.loadAllGnomes(res.Brastlewark));
    }
  }

  render() {
    return (
      <div
        className={
          this.state.allGnome
            ? 'dashboard dashboard-small'
            : 'dashboard dashboard-wide'
        }
      >
        <div className="show_all_gnomes">
          {this.state.allGnome && (
            <div className="top_dashboard">
              <Gnomelist gnomes={this.props.store.gnomes} {...this.props} />
            </div>
          )}
          <button
            onClick={() => this.setState({ allGnome: !this.state.allGnome })}
          >
            Scroll through all the gnomes{' '}
          </button>
        </div>
        <div className="filters">
          <button onClick={() => this.props.history.push('/filters')}>
            Use some filters
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state
});

const mapDispatchToProps = dispatch => ({
  loadAllGnomes: gnomes => dispatch(loadAllGnomes(gnomes))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
