import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../context/cartContext";

const ItemDetail = ({ item, imagenes }) => {
  //Context
  const { massege } = useContext(CartContext);
  //imagen Principal
  const [imgMajor, setImgMajor] = useState(imagenes[0]);
  //Imagenes secundarias
  const [imgSecundary1, setImgSecundary1] = useState(true);
  const [imgSecundary2, setImgSecundary2] = useState(false);
  const [imgSecundary3, setImgSecundary3] = useState(false);
  const [imgSecundary4, setImgSecundary4] = useState(false);
  const [imgSecundary5, setImgSecundary5] = useState(false);
  const [imgSecundary6, setImgSecundary6] = useState(false);
  //Navegacion
  const navigate = useNavigate();
  //Stock, Cantidad Seleccionada y Cantidad Maxima
  const [countStock, setcountStock] = useState(item.stock);
  const [count, setCount] = useState(1);
  const maxAdd = countStock;

  //Aumentear y Reducir Cantidad
  const handleCount = (added) => {
    if (added === "add") {
      const text = "Stock Insuficiente";
      count < maxAdd ? setCount(count + 1) : massege(text);
    }
    if (added === "remove" && count > 1) setCount(count - 1);
  };

  //Actusalizamos el Stock visible
  const handleAdd = () => {
    const text = "Stock Insuficiente";
    countStock === 0 ? massege(text) : setcountStock(countStock - count);
  };

  return (
    <div className="itemDatails">
      <div
        className="closeDetails"
        onClick={() => {
          navigate(-1);
        }}
      >
        <ion-icon name="arrow-back-outline"></ion-icon>
      </div>
      <section className="datailsGallery">
        <img className="imgMajor" alt={item.title} src={imgMajor} />
        <div className="imgSecundarys">
          <div
            className={
              imgSecundary1
                ? "imgSecundaryContainer active"
                : "imgSecundaryContainer"
            }
          >
            <img
              alt={item.title}
              className="imgSecundary"
              src={imagenes[0]}
              onClick={() => {
                setImgMajor(imagenes[0]);
                setImgSecundary1(true);
                setImgSecundary2(false);
                setImgSecundary3(false);
                setImgSecundary4(false);
                setImgSecundary5(false);
                setImgSecundary6(false);
              }}
            />
          </div>
          <div
            className={
              imgSecundary2
                ? "imgSecundaryContainer active"
                : "imgSecundaryContainer"
            }
          >
            <img
              alt={item.title}
              className="imgSecundary"
              src={imagenes[1]}
              onClick={() => {
                setImgMajor(imagenes[1]);
                setImgSecundary1(false);
                setImgSecundary2(true);
                setImgSecundary3(false);
                setImgSecundary4(false);
                setImgSecundary5(false);
                setImgSecundary6(false);
              }}
            />
          </div>
          <div
            className={
              imgSecundary3
                ? "imgSecundaryContainer active"
                : "imgSecundaryContainer"
            }
          >
            <img
              alt={item.title}
              className="imgSecundary"
              src={imagenes[2]}
              onClick={() => {
                setImgMajor(imagenes[2]);
                setImgSecundary1(false);
                setImgSecundary2(false);
                setImgSecundary3(true);
                setImgSecundary4(false);
                setImgSecundary5(false);
                setImgSecundary6(false);
              }}
            />
          </div>
          <div
            className={
              imgSecundary4
                ? "imgSecundaryContainer active"
                : "imgSecundaryContainer"
            }
          >
            <img
              alt={item.title}
              className="imgSecundary"
              src={imagenes[3]}
              onClick={() => {
                setImgMajor(imagenes[3]);
                setImgSecundary1(false);
                setImgSecundary2(false);
                setImgSecundary3(false);
                setImgSecundary4(true);
                setImgSecundary5(false);
                setImgSecundary6(false);
              }}
            />
          </div>
          <div
            className={
              imgSecundary5
                ? "imgSecundaryContainer active"
                : "imgSecundaryContainer"
            }
          >
            <img
              alt={item.title}
              className="imgSecundary"
              src={imagenes[4]}
              onClick={() => {
                setImgMajor(imagenes[4]);
                setImgSecundary1(false);
                setImgSecundary2(false);
                setImgSecundary3(false);
                setImgSecundary4(false);
                setImgSecundary5(true);
                setImgSecundary6(false);
              }}
            />
          </div>
          <div
            className={
              imgSecundary6
                ? "imgSecundaryContainer active"
                : "imgSecundaryContainer"
            }
          >
            <img
              alt={item.title}
              className="imgSecundary"
              src={imagenes[5]}
              onClick={() => {
                setImgMajor(imagenes[5]);
                setImgSecundary1(false);
                setImgSecundary2(false);
                setImgSecundary3(false);
                setImgSecundary4(false);
                setImgSecundary5(false);
                setImgSecundary6(true);
              }}
            />
          </div>
        </div>
      </section>
      <section className="cardProduct datails">
        <div className="productItem">
          <h2 className="title">{item.title}</h2>
          <p className="category">{item.category}</p>
        </div>
        <div className="productItem">
          <h2 className="infoTitle">Descripción</h2>
          <p className="infoText">{item.description}</p>
        </div>
        <div className="productItem">
          <p className="infoText">
            <strong>{countStock}</strong> unidades
          </p>
        </div>
        <div className="productItem">
          <div className="colors_size">
            <div className="colors">
              <h2>Color</h2>
              <div className="bottomColors">
                <button
                  className="color"
                  style={{
                    background: item.color[1],
                    border: `2px solid ${item.color[1]}`,
                  }}
                ></button>
                <button
                  className="color"
                  style={{
                    background: item.color[2],
                    border: `2px solid ${item.color[2]}`,
                  }}
                ></button>
              </div>
            </div>
            <div className="sizes">
              <h2>Talle</h2>
              <div className="bottomSizes">
                <button className="size">S</button>
                <button className="size">M</button>
                <button className="size">L</button>
                <button className="size">XL</button>
              </div>
            </div>
          </div>
        </div>
        <div className="productItem">
          <div className="card_price">
            {item.stock === 0 ? (
              <p>SIN STOCK</p>
            ) : (
              <>
                <div className="buy">
                  <ItemCount
                    item={item}
                    imagenes={imagenes[0]}
                    countStock={countStock}
                    count={count}
                    handleCount={handleCount}
                    handleAdd={handleAdd}
                    massege={massege}
                  />
                  <Link to="/cart" className="button-buy">
                    BUY
                  </Link>
                </div>
              </>
            )}

            <div className="price-conten">
              <p>$</p>
              <p className="price">{`${item.price}`}</p>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};
export default ItemDetail;
