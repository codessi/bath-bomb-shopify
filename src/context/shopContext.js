import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
});

class ShopProvider extends Component {
  state = {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
  };

  componentDidMount() {
    if(localStorage.checkout_id){
      this.fetchCheckout(localStorage.checkout_id)
    } else {
      this.createCheckout()
    }
    
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create()
    localStorage.setItem("checkout_id", checkout.id)
    this.setState({checkout: checkout})
  };
  // it create empty checkout then save to state and 
  // it's id to localStorage

  fetchCheckout = (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => {
        this.setState({checkout: checkout})
    });
  };

  addItemtoCheckout = async () => {};

  removeLineItem = async (lineItemIdsToRemove) => {};

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products});
    // console.log( "in fetchall ", products)
  };

  fetchProductWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    this.setState({ product: product });
  };

  closeCart = () => {};

  openCart = () => {};

  closeMenu = () => {};

  openMenu = () => {};

  render() {

    return (
      <ShopContext.Provider value={{
        ...this.state,
        fetchAllProducts:this.fetchAllProducts,
        fetchProductWithHandle:this.fetchProductWithHandle,
        addItemtoCheckout:this.addItemtoCheckout,
        removeLineItem:this.removeLineItem,
        closeCart:this.closeCart,
        openCart:this.openCart,
        closeMenu:this.closeMenu,
        openMenu:this.openMenu,
      }}>
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };
export default ShopProvider;
