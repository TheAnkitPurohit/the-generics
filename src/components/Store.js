import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Store() {
  return (
    <div id="about">
      <header className="text-white h-48 flex flex-col items-center">
        <Navbar />

        {/* divider  */}
        <div className="divider w-full h-0.5 bg-gray-500" />
        {/* bg  */}
        <h1 className="heading-font text-6xl m-6">The Generics</h1>
      </header>

      {/* store  */}
      <div>
        {/* music  */}
        <section id="music" className="flex flex-col items-center my-5">
          <h1 className="heading-font text-6xl m-6">music</h1>
          {/* music-container */}
          <div className="music-container w-full md:w-5/6 lg:w-4/6 xl:w-1/2 mx-auto">
            {/* items  */}
            <div className="items flex flex-col sm:flex-row justify-between my-8 mx-3">
              <div className="item flex flex-col items-center">
                <h1 className="text-xl font-bold my-2">Album 1</h1>
                <img src="images/album1.png" alt="" />
                <div className="info flex w-52 my-4 justify-between items-center">
                  <div className="price">$12.99</div>
                  <button className="text-white bg-blue-400 rounded p-2 uppercase">
                    add to cart
                  </button>
                </div>
              </div>
              <div className="item flex flex-col items-center">
                <h1 className="text-xl font-bold my-2">Album 2</h1>
                <img src="images/album2.png" alt="" />
                <div className="info flex w-52 my-4 justify-between items-center">
                  <div className="price">$14.99</div>
                  <button className="text-white bg-blue-400 rounded p-2 uppercase">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
            {/* items  */}
            <div className="items flex flex-col sm:flex-row justify-between my-8 mx-3">
              <div className="item flex flex-col items-center">
                <h1 className="text-xl font-bold my-2">Album 3</h1>
                <img src="images/album3.png" alt="" />
                <div className="info flex w-52 my-4 justify-between items-center">
                  <div className="price">$9.99</div>
                  <button className="text-white bg-blue-400 rounded p-2 uppercase">
                    add to cart
                  </button>
                </div>
              </div>
              <div className="item flex flex-col items-center">
                <h1 className="text-xl font-bold my-2">Album 4</h1>
                <img src="images/album4.png" alt="" />
                <div className="info flex w-52 my-4 justify-between items-center">
                  <div className="price">$19.99</div>
                  <button className="text-white bg-blue-400 rounded p-2 uppercase">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* merchandise  */}
        <section id="merch" className="flex flex-col items-center my-5">
          <h1 className="heading-font text-6xl m-6">merch</h1>
          {/* merch-container */}
          <div className="merch-container w-full md:w-5/6 lg:w-4/6 xl:w-1/2 mx-auto">
            {/* items  */}
            <div className="items flex flex-col sm:flex-row justify-between my-8 mx-3">
              <div className="item flex flex-col items-center">
                <h1 className="text-xl font-bold my-2">T-Shirt</h1>
                <img src="images/shirt.png" alt="" />
                <div className="info flex w-52 my-4 justify-between items-center">
                  <div className="price">$19.99</div>
                  <button className="text-white bg-blue-400 rounded p-2 uppercase">
                    add to cart
                  </button>
                </div>
              </div>
              <div className="item flex flex-col items-center">
                <h1 className="text-xl font-bold my-2">Coffee Cup</h1>
                <img src="images/Cofee.png" alt="" />
                <div className="info flex w-52 my-4 justify-between items-center">
                  <div className="price">$6.99</div>
                  <button className="text-white bg-blue-400 rounded p-2 uppercase">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* cart  */}
        <section id="cart" className="flex flex-col items-center my-5">
          <h1 className="heading-font text-6xl m-6">cart</h1>
          <div className="cart-container w-5/6 lg:w-4/6 xl:w-1/2">
            <div className="cart-header flex justify-between uppercase text-left font-bold my-4">
              <div className="item-title border-b-2 border-black">item</div>
              <div className="price-title border-b-2 border-black">price</div>
              <div className="quantity-title border-b-2 border-black">
                quantity
              </div>
            </div>
            <div className="product-box flex justify-between">
              <div className="product-info flex items-center">
                <img
                  src="images/Shirt.png"
                  alt="shirt"
                  className="img w-20 rounded"
                />
                <span className="mx-2">T-shirt</span>
              </div>
              <div className="product-price">$19.99</div>
              <div className="product-quantity">
                <input
                  type="number"
                  name="number"
                  defaultValue={1}
                  id
                  className="w-5"
                />
                <button className="remove">remove</button>
              </div>
            </div>
            <table>
              <tbody>
                <tr className="cart-header w flex justify-between uppercase text-left font-bold my-4">
                  <td>item</td>
                  <td>price</td>
                  <td>quantity</td>
                </tr>
                <tr>
                  <td>
                    <img src="images/Shirt.png" alt="" />
                    <p>T-shirt</p>
                  </td>
                  <td>$19.99</td>
                  <td>
                    <input
                      type="number"
                      name="number"
                      defaultValue={1}
                      id
                      className="w-5"
                    />
                    <button className="remove">remove</button>
                  </td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* footer  */}
      <Footer />
    </div>
  );
}
