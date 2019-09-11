import React from 'react';


class Pokemon extends React.Component {
  render() {
    return (
        <React.Fragment>
          <div className="pokemon__container">
            <img className="pokemon__img" src={this.props.img} alt={this.props.name}></img>
            <p className="pokemon__name">{this.props.name}</p>
            <ol className="pokemon__types">
              {this.props.types.map((type, index) => {
                return(
                  <li className="pokemon__types__element" key={index}>{type}</li>
                )
              })}
            </ol>
          </div>
        </React.Fragment>
        );
  }
};

export default Pokemon;

