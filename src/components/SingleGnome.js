import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleGnome extends Component {
  src = this.props.gnome.thumbnail;
  componentDidMount() {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const { isIntersecting } = entry;
          if (isIntersecting) {
            this.element.src = this.src;
            this.observer = this.observer.disconnect();
          }
        });
      },
      {
        root: document.querySelector('.container')
      }
    );
    this.observer.observe(this.element);
  }

  render() {
    const { gnome } = this.props;
    return (
      <div className="gnome">
        <h2>{gnome.name}</h2>
        <div className="gnome_image">
          {/* <img src={gnome.thumbnail} alt={'gnome profile pic'} /> */}
          <img ref={el => (this.element = el)} alt={'gnome profile pic'} />
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
