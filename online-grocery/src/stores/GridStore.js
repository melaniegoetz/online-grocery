var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('underscore');

//Definte initial data points
var _products = {}, _selected = null;

function loadProductData(data) {
  _products = data;
  _selected = data[0];
}

function setSelected(index) {
  _selected = _products[index];
}

var GridStore = _.extend({}, EventEmitter.prototype, {

  //return data
  getProducts: function() {
    return _products;
  },
  // return selected product
  getSelected: function() {
    return _selected;
  },
  //emit change event
  emitChange: function() {
    this.emit('change');
  },
  //add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  //remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {
    case FluxCartConstants.RECEIVE_DATA:
      loadProductData(action.data);
      break;

    case FluxCartConstants.SELECT_PRODUCT:
      setSelected(action.data);
      break;

    default:
      return true;
  }

  GridStore.emitChange();
  return true;

});

module.exports= GridStore;