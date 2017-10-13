var React = require('react');
var CartStore = require('../stores/CartStore');
var GridStore = require('../stores/GridStore');
var FluxGrid = require('./FluxGrid.react');
var FluxCart = require('./FluxCart.react');

function getCartState() {
  return {
    products: GridStore.getProducts(),
    selectedProduct: GridStore.getSelected(),
    cartItems: CartStore.getCartItems(),
    cartCount: CartStore.getCartCount(),
    cartTotal: CartStore.getCartTotal(),
    cartVisible: CartStore.getCartVisible()
  };
}

var FluxCartApp_Grid = React.createClass({
  getInitialState: function() {
    return getCartState();
  },
  componentDidMount: function() {
    GridStore.addChangeListener(this._onChange);
    CartStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    GridStore.removeChangeListener(this._onChange);
    CartStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        <FluxGrid products={this.state.products} cartitems={this.state.cartItems} selected={this.state.selectedProduct} />
      </div>
    );
  },

  _onChange: function() {
    this.setState(getCartState());
  }
});

module.exports = FluxCartApp_Grid;