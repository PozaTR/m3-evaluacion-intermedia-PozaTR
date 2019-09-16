import React from 'react';
import './Pokemon.scss';
import PropTypes from 'prop-types';


class Pokemon extends React.Component {
  render() {
    const { img, name, types } = this.props
    return (
        <div className="pokemon__card">
          <img className="pokemon__img" src={img} alt={name}></img>
          <div>
            <p className="pokemon__name">{name}</p>
            <ol className="pokemon__types">
              {types.map((type, index) => {
                return (
                  <li className="pokemon__types__element" key={index}>{type}</li>
                )
              })}
            </ol>
          </div>
        </div>
    );
  }
};

Pokemon.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Pokemon;

