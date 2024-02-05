import React, { useEffect, useState } from "react";
import PaageHeader from "../component/PaageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "/images/shop/del.png";
import CheckOutPage from "./CheckOutPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    // Fetch cart items from local storage\
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  // calculate total price
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  //handle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    //update local storage with new cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  //handle quantity decrease
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);

      //update local storage with new cart items
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  //handle remove item
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

    //update new cart
    setCartItems(updatedCart);

    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = (cart) => {
    //update local storage with new cart items
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  //calculate cart subtotal
  const cartSubTotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  //order total
  const orderTotal = cartSubTotal;

  return (
    <div>
      <PaageHeader title={"Shop Cart"} curPage={"Cart Page"} />

      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/*cart toolbar*/}

            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-pice">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((item, indx) => (
                    <tr key={indx}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>

                      <td className="cat-price">₹{item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        ₹{calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/*cart bottom*/}
            <div className="cart-bottom">
              {/*checkout box */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    className="cart-page-input-text"
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="Coupon code"
                  />
                  <input type="submit" value={"Apply Coupon"} />
                </form>

                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div>
                    <CheckOutPage/>
                  </div>
                </form>
              </div>

              {/* shopping box */}
              <div className="shiping-box">
                <div className="row ">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shiping</h3>
                      <div className="outline-select ">
                        <select>
                          <option value="ind">india</option>
                          <option value="uk">United kingdom(UK)</option>
                          <option value="us">United State (US)</option>
                          <option value="bd">Bangladesh</option>
                          <option value="pak">Pakisthan</option>
                          <option value="np">Nepal</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <div className="outline-select shipping-select">
                        <select>
                          <option value="ind">Ramsagar</option>
                          <option value="ind">New Delhi</option>
                          <option value="ind">Kolkata</option>
                          <option value="ind">Bishnupur</option>
                          <option value="uk">New York</option>
                          <option value="us">London</option>
                          <option value="bd">Dhaka</option>
                          <option value="pak">Korachi</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input type="text" name="postalCode" id="postalCode" className="cart-page-input-text" placeholder="postcode/ZIP*" />
                      <button type="submit">Update Adress</button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                        <h3>Cart Total</h3>
                        <ul className="lab-ul">
                            <li>
                                <span className="pull-left">Cart Subtotal</span>
                                <p className="pull-right">₹ {cartSubTotal}</p>
                            </li>
                            <li>
                                <span className="pull-left">Shipping and handling</span>
                                <p className="pull-right">Free Shipping</p>
                            </li>
                            <li>
                                <span className="pull-left">Order Total</span>
                                <p className="pull-right">₹ {orderTotal.toFixed(2)}</p>
                            </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
