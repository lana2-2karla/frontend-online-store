import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCart extends Component {
  render() {
    const { thumbnail, title, price, quantity, increaseCart } = this.props;
    return (
      <div>
        <div>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div data-testid="shopping-cart-product-name">
          { title }
        </div>
        <div>
          { price }
        </div>
        <div>
          <button
            type="button"
            data-testid="product-decrease-quantity"
          >
            -
          </button>
          { quantity }
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ increaseCart }
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

ProductCart.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  increaseCart: PropTypes.func.isRequired,
};
