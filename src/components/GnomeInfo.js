import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class GnomeInfo extends Component {
  state = { gnome: '', id: '' };
  componentDidMount() {
    const thisGnome = this.props.gnomes.filter(
      el => el.id === Number(this.props.match.params.id)
    );
    let thisGnomeFriends = [];
    thisGnome[0].friends.forEach(el => {
      let singleFriend = this.props.gnomes.filter(gnome => gnome.name === el);
      thisGnomeFriends = [...thisGnomeFriends, ...singleFriend];
    });
    this.setState({
      gnome: thisGnome[0],
      friends: thisGnomeFriends
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      const thisGnome = this.props.gnomes.filter(
        el => el.id === Number(this.props.match.params.id)
      );
      let thisGnomeFriends = [];
      thisGnome[0].friends.forEach(el => {
        let singleFriend = this.props.gnomes.filter(gnome => gnome.name === el);
        thisGnomeFriends = [...thisGnomeFriends, ...singleFriend];
      });
      this.setState({
        gnome: thisGnome[0],
        friends: thisGnomeFriends
      });
    }
  }

  render() {
    return (
      <div className="GnomeInfo">
        <h1>{this.state.gnome.name} </h1>
        <h2>Age: {this.state.gnome.age}</h2>
        <div className="informations">
          <div className="gnome_friends">
            <h4>Friends:</h4>
            <ul>
              {this.state.friends &&
                this.state.friends.map(el => (
                  <Link
                    to={{ pathname: '/gnome/' + el.id, state: { gnome: el } }}
                    key={el.id}
                    onClick={() => this.setState({ id: el.id })}
                  >
                    <li key={el.id + Math.random()}>{el.name}</li>
                  </Link>
                ))}
            </ul>
            <h4>Height:</h4>
            <p>{this.state.gnome.height} cm</p>
            <h4>Weight:</h4>
            <p>{this.state.gnome.weight} kg</p>
          </div>
          <div className="gnome_image">
            <img src={this.state.gnome.thumbnail} alt={'gnome profile pic'} />
          </div>
          <div className="gnome_jobs">
            <h4>Professions:</h4>
            <ul>
              {this.state.gnome.professions &&
                this.state.gnome.professions.map(el => <li key={el}>{el}</li>)}
            </ul>
            <h4>Hair Color:</h4>
            <p>{this.state.gnome.hair_color}</p>
          </div>
        </div>
        <div className="buttons">
          <button onClick={() => this.props.history.push('/filters')}>
            Back to Filters
          </button>
          <button onClick={() => this.props.history.push('/')}>
            Home Page
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  gnomes: store.gnomes
});

export default connect(mapStateToProps)(GnomeInfo);
