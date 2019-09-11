import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
        <React.Fragment>
          <div>
            <div className="pokemon__image-container"></div>
            <p className="pokemon__name">{this.props.name}</p>
            <p className="pokemon__types"></p>
            <p className="pokemon__evolution"></p>
          </div>
        </React.Fragment>
        );
  }
};

export default Pokemon;

