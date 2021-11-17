import "Styles/Cart/Footer.css";

function Footer({ total }) {
  return (
    <div className="Cart-Footer">
      <h3 className="Cart-Total">Total a Pagar: S/. {total}</h3>
      <div className="Cart-Options-Total">
        <button
          className="button"
          onClick={() => alert("Su Producto se ha Enviado Correctamente")}
        >
          Pagar
        </button>
      </div>
    </div>
  );
}
export default Footer;
