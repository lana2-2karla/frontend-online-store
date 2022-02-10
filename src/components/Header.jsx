import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/ShoppingCart"
        >
          <button
            type="button"
          >
            Carrinho
          </button>
        </Link>
      </div>
    );
  }
}
export default Header;