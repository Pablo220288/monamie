import React, { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { VscTag } from "react-icons/vsc";
import visa from "../assets/visa.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cart, total, removeCartItem } = useContext(CartContext);

  const massege = (text) => {
    toast.error(`${text}`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const massegeOk = (text) => {
    toast.success(`${text}`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const [desc, setDesc] = useState(0);
  const [newTotal, setNewTotal] = useState(total());

  const coupon = (e) => {
    e.preventDefault();

    if (e.target[0].value === "") {
      setDesc(0);
      massege("Ingese un Cupón");
    } else if (e.target[0].value === "CODERHOUSE") {
      setDesc(((total() * 15) / 100).toFixed());
      setNewTotal((total() - desc).toFixed());
      massegeOk("Cupón Aplicado");
    } else {
      setDesc(0);
      massege("Cupón  Invalido");
    }
  };
  console.log(total());

  const shipping = () => {
    if (total() > 50.0) {
      return <p className="freeShipping">Free Shipping</p>;
    } else {
      return (
        <>
          <form className="form-shipping">
            <label>
              <input type={"radio"} name={"envio"} />
              Retiro en Sucursal<strong>Gratis</strong>
            </label>
            <label>
              <input type={"radio"} name={"envio"} />
              Punto de Retiro <strong>$500</strong>
            </label>
            <label>
              <input type={"radio"} name={"envio"} />
              Envio a Domicilio <strong>$1000</strong>
            </label>
          </form>
          <p>
            Por compras superiores a los $50.000 <strong>ENVIO GRATIS</strong>
          </p>
        </>
      );
    }
  };

  return (
    <div className="cart-conten">
      <div className="cart-conten-product">
        <div className="cart-titles">
          <h4>PRODUCTOS</h4>
          <h4>SUBTOTAL</h4>
        </div>
        <ul className="cardPrevius">
          {cart.map((product) => (
            <li key={product.id} className="cardPreviusItems">
              <div className="img-info">
                <img
                  alt={product.title}
                  className="imgCartPrevius"
                  src={product.img}
                ></img>
                <div className="infoPrevius">
                  <p className="infoTitle">{product.title}</p>
                  <p className="infoCant">
                    <strong>{`${product.cant}`}</strong> prenda x{" "}
                    <strong>{`$${product.price}`}</strong>
                  </p>
                  <div className="infoFin">
                    <p className="fin">
                      <strong>12</strong> pagos con
                    </p>
                    <img className="visa" src={visa} alt="Visa"></img>
                  </div>
                </div>
              </div>
              <div className="delete-price">
                <div
                  className="cartDelete"
                  onClick={() => {
                    removeCartItem(product.id);
                  }}
                >
                  <AiOutlineDelete />
                </div>
                <div className="price-conten">
                  <p>$</p>
                  <p className="price">{`${(
                    product.cant *
                    product.price *
                    1000
                  ).toFixed()}`}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart-conten-total">
        <div className="total-cart">
          <h4 className="total-title">TOTAL CARRITO</h4>
          <div className="subtotal-conten">
            <h5>SUBTOTAL</h5>
            <div className="subtotal-price">
              <p>$</p>
              <p className="price">{total()}</p>
            </div>
          </div>
          <div className="shipping-conten">
            <div className="shipping-title">
              <MdOutlineLocalShipping />
              <h5>Envío</h5>
            </div>
            {shipping()}
          </div>
          <div className="coupon-conten">
            <div className="coupon-title">
              <VscTag />
              <h5>Cupón</h5>
            </div>
            <div className="coupon-input-desc">
              <form onSubmit={coupon} className="coupon-input-conten">
                <input
                  className="coupon-input"
                  placeholder="Ingresá tu cupón"
                ></input>
                <button type="submit" className="coupon-button">
                  APLICAR
                </button>
              </form>
              <div
                className={
                  desc === 0 ? "coupon-desc" : "coupon-desc coupon-desc-show"
                }
              >
                <p>-</p>
                <p>$</p>
                <p className="price">{desc}</p>
              </div>
            </div>
          </div>
          <div className="total-total-price">
            <h5>Total</h5>
            <div className="total-price">
              <p>$</p>
              <p className="price">{(total() - desc).toFixed()}</p>
            </div>
          </div>
          <div className="cart-buttons">
            <Link to="/products" className="cart-return">
              <ion-icon name="arrow-back-outline"></ion-icon>
              <p>Seguir Comprando</p>
            </Link>
            <Link className="total-cart-button">AVANZAR</Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;