import Button from 'react-bootstrap/lib/Button'
import ReactDOM from 'react-dom';
var React = require('react');
var Sidebar = require('react-sidebar').default;
var Grid = require('./components/grid/grid.react');

var ProductData = require('./ProductData');
var CartAPI = require('./utils/CartAPI')
var FluxCartApp_Cart = require('./components/FluxCartApp_Cart.react');
var FluxCartApp_Product = require('./components/FluxCartApp_Product.react');
var FluxCartApp_Grid = require('./components/FluxCartApp_Grid.react');
// Load Mock Product Data into localStorage
ProductData.init();

// Load Mock API Call
CartAPI.getProductData();

// Render FluxCartApp Controller View
// RENDERING BELOW INSTEAD

// ----------CART ELEMENTS----------------------

class CartElement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <img className="col-sm-6 col-md-2" src="./images/banana.jpg" width="150"/>
          <h2 className="col-sm-6 col-md-2">Banana</h2>
          <h2 className="col-sm-6 col-md-2">Price </h2>
          <form onSubmit={this.handleSubmit}>
            <label>Quantity</label>
            <select>
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
              <option value="four">4</option>
            </select>
            <input type="submit" value="Submit" />
            <button type="button">Remove</button>
          </form>
        </div>
      </div>
    );
  }
}

// -----------HEADER AND SIDEBAR---------------------------------------------------------------------

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};

var MySidebar = React.createClass({
  getInitialState() {
    return {docked: true, sidebarOpen: false, sidebarRight: true, touchHandleWidth: 200};
  },

  onSetSidebarOpen: function(open) {
    this.setState({sidebarOpen: open});
  },

  componentWillMount: function() {
    var mql = window.matchMedia(`(min-width: 800px)`);
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  },

  componentWillUnmount: function() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  },

  mediaQueryChanged: function() {
    this.setState({sidebarDocked: this.state.mql.matches});
  },

  surveyLinkHref: function() {
    return 'https://duke.qualtrics.com/SE/?SID=SV_beaRAUN2H1fRKAJ';
  },

  render: function() {
    const sidebarStyles = {
      header: {
        padding: 20,
        height: 80,
        backgroundColor: "#319F52"
      },
      sidebar: {
        width: 350,
        maxHeight: "inherit"},
      footer: {
       position:"fixed",
       left:"0px",
       bottom:"0px",
       height:"80px",
       width:"100%",
       textAlign: "center"
      },
      checkout_button: {
        width:"100%",
        verticalAlign: "middle",
        marginTop: "15px",
        fontSize: "16px",
        fontWeight: "bold",

        display: "block",

        marginTop: "20px",
        padding: "10px 30px",

        color: "white",
        border: "0px",
        borderRadius: "3px",
        outline: "none",
        background: "#2ecc71",
        boxShadow: "0 5px 0 #27ae60"
      }
    };

    const pageHeaderStyles = {
      main: {
        height: 65,
        textAlign: "center",
        backgroundColor: "#319F52",
        verticalAlign: "middle"
      },
      header: {
        float:"left",
        marginLeft: 50,
        marginTop: 15
      },
      image: {
        float: "right",
        marginRight: 30,
        marginTop: 30
      }
    };

    var sidebarContent =
      <div>
        <FluxCartApp_Cart/>
        <div style={sidebarStyles.footer}>
          <a href={this.surveyLinkHref()} className="button" style={sidebarStyles.checkout_button}>
            Check out
          </a>
        </div>
      </div>;

    return (
      <div>
        <Sidebar styles = {sidebarStyles}
                sidebar={sidebarContent}
                 open={this.state.sidebarOpen}
                 pullRight={this.state.sidebarRight}
                 docked={this.state.docked}
                 onSetOpen={this.onSetSidebarOpen}
                 touchHandleWidth={this.touchHandleWidth}>
          <div style={pageHeaderStyles.main}>
              <div className="row">
                <h1 style={pageHeaderStyles.header}>Experimental Shopping</h1>
              </div>
          </div>

          <div id="navigation">
            <ul className="nav nav-pills">
                <li role="presentation" className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                    All Departments <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="./produce.html">Produce</a></li>
                  <li><a href="./frozen.html">Frozen</a></li>
                </ul>
                </li>
            </ul>
          </div>

          <div id="ads">
            <img className="ad" src="./images/sale_banners/sale_banner_0.png"/>
            <img className="ad" src="./images/sale_banners/sale_banner_1.png"/>
            <img className="ad" src="./images/sale_banners/sale_banner_2.png"/>
          </div>
        <FluxCartApp_Product/>
        <FluxCartApp_Grid/>
        </Sidebar>
      </div>
    );
  }
});


ReactDOM.render(<MySidebar/>, document.getElementById('root'));
