var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions');
import {Row, Col} from 'react-bootstrap';

var FluxGrid = React.createClass({
  addToCart: function(event){
    var item = this.props.selected;
    var current = item.variants[0];
    var sku = current.sku;
    
    var update = {
      name: item.name,
      type: current.type,
      price: current.price,
      image: current.image,
      nuVal: current.nuVal
    }
    FluxCartActions.addToCart(sku, update);
  },

  selectProduct: function(event){

  },

  render: function() {
      const addToCartFunc = this.addToCart;
    return (
      <div className="flux-grid">
        {
            this.props.products.map(function(item, index){
              return (
                <Col md={2} key={index}>
                  <span>
                    <img src={item.img} height="42" width="42" />
                  </span>
                  <h1 className="name">{item.name}</h1>
                  <p className="description">{item.description}</p>
                  <p className="price">Price: ${item.variants[0].price}</p>
                  <p className="price">NuVal: {item.variants[0].nuVal}</p>
                  <button type="button" onClick={addToCartFunc}>
                    Add to Cart
                  </button>
                </Col>
              )
            })
          }
      </div>
    );
  }
});

module.exports = FluxGrid;