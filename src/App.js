import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchProductsAction from './utils/fetchProducts';
import {getProductsError, getProducts, getProductsPending} from './reducers/reducer';
import ProductList from './ProductList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    const {fetchProducts} = this.props;
    fetchProducts();
  }

  render () {
    const {products, error, pending} = this.props;
    if(pending) return <p>Loading</p>
    return (
      <div className='product-list-wrapper'>
          {error && <span className='product-list-error'>{error}</span>}
          <ProductList products={products} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  error: getProductsError(state),
  products: getProducts(state),
  pending: getProductsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts: fetchProductsAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
