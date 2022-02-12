import React from 'react';
import PropTypes from 'prop-types';
import ProductCart from '../components/ProductCart';
import * as api from '../services/api';

class ShoppingCart extends React.Component {
  state = {
    productDetails: [],
    loading: true,
  }

  async componentDidMount() {
    const { cart } = this.props;
    const productPromises = cart.map(({ id }) => api.getProductDetails(id));
    const productDetails = await Promise.all(productPromises);
    this.setState({ productDetails, loading: false });
  }

  countCartItems = () => {
    const { cart } = this.props;
    return cart.reduce((acc, { quantity }) => acc + quantity, 0);
  }

  checkCartQuantity = (productId) => {
    const { cart } = this.props;
    return cart.find(({ id }) => id === productId).quantity;
  }

  render() {
    const { productDetails, loading } = this.state;
    const { cart } = this.props;

    return (
      loading ? <p>Carregando...</p>
        : (
          <div>
            {
              cart.length ? (
                <h2 data-testid="shopping-cart-product-quantity">
                  { `Quantidade Total de Produtos: ${this.countCartItems()}` }
                </h2>)
                : (
                  <h2 data-testid="shopping-cart-empty-message">
                    Seu carrinho está vazio
                  </h2>)
            }
            {
              cart.length > 0 && productDetails
                .map((product) => (
                  <ProductCart
                    key={ product.id }
                    { ...product }
                    quantity={ this.checkCartQuantity(product.id) }
                  />))
            }
          </div>
        )
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
};

export default ShoppingCart;
