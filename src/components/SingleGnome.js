import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleGnome extends Component {
  render() {
    const { gnome } = this.props;
    return (
      <div className="gnome">
        <h2>{gnome.name}</h2>
        <div className="gnome_image">
          <img src={gnome.thumbnail} alt={'gnome profile pic'} />
        </div>
        <div className="single_gnome_bottom">
          <p>Age: {gnome.age}</p>
          <Link
            to={{
              pathname: '/gnome/' + gnome.id,
              stat: { gnome: gnome }
            }}
          >
            <button>More Info</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SingleGnome;
