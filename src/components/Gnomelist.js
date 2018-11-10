import React, { Component } from 'react';
import SingleGnome from './SingleGnome';

class Gnomelist extends Component {
  render() {
    return (
      <div className="single_view">
        {this.props.gnomes &&
          this.props.gnomes.map(el => {
            return <SingleGnome gnome={el} key={el.id} {...this.props} />;
          })}
      </div>
    );
  }
}

export default Gnomelist;
