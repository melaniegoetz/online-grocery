var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions');

// Flux cart view
var FluxCart = React.createClass({

  // Remove item from Cart via Actions
  removeFromCart: function(sku){
    FluxCartActions.removeFromCart(sku);
  },

  // Render cart view
  render: function() {
    var self = this, products = this.props.products;
    return (
      <div className={"flux-cart " + (this.props.visible ? 'active' : '')}>
        <div className="mini-cart">
          <span className="total">Total: ${this.props.total}</span>
          <span className="total">NuVal Total: {this.props.nuValTotal}</span>
          <ul>
            {Object.keys(products).map(function(product){
              return (
                <li key={product}>
                  <h1 className="name">{products[product].name}</h1>
                  <p className="type">{products[product].type} x {products[product].quantity}</p>
                  <p className="price">${(products[product].price * products[product].quantity).toFixed(2)}</p>
                  <img className="item-image" src={products[product].image}/>
                  <button type="button" className="remove-item" onClick={self.removeFromCart.bind(self, product)}>X</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  },

});

module.exports = FluxCart;
