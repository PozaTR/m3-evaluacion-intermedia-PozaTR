import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
        <React.Fragment>
          <div>
            <img className="pokemon__img" src={this.props.img} alt={this.props.name}></img>
            <p className="pokemon__name">{this.props.name}</p>
            <ul className="pokemon__types">
              {this.props.types.map((type, index) => {
                return(
                  <li className="pokemon__types__element" key={index}>{type}</li>
                )
              })}
            </ul>
          </div>
        </React.Fragment>
        );
  }
};

export default Pokemon;

