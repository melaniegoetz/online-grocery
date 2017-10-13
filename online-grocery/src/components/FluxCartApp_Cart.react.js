var React = require('react');
var CartStore = require('../stores/CartStore');
var FluxCart = require('./FluxCart.react');

// Method to retrieve state from Stores
function getCartState() {
  return {
    cartItems: CartStore.getCartItems(),
    cartCount: CartStore.getCartCount(),
    cartTotal: CartStore.getCartTotal(),
    nuValTotal: CartStore.getNuValTotal(),
    cartVisible: CartStore.getCartVisible()
  };
}

// Define main Controller View
var FluxCartApp_Cart = React.createClass({

  // Get initial state from stores
  getInitialState: function() {
    return getCartState();
  },

  // Add change listeners to stores
  componentDidMount: function() {
    CartStore.addChangeListener(this._onChange);
  },

  // Remove change listers from stores
  componentWillUnmount: function() {
    CartStore.removeChangeListener(this._onChange);
  },

  // Render our child components, passing state via props
  render: function() {
    return (
      <div className="flux-cart-app">
        <FluxCart products={this.state.cartItems}
                  count={this.state.cartCount}
                  nuValTotal={this.state.nuValTotal}
                  total={this.state.cartTotal}
                  visible={this.state.cartVisible} />
      </div>
    );
  },

  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getCartState());
  }

});

module.exports = FluxCartApp_Cart;
