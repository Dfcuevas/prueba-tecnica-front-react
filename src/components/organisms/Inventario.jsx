import dataProducts from "../../data/productos.json";
import ProductCard from "../molecules/ProductCard";
const Inventario = () => {
  const productos = dataProducts.productos;
  return (
    <>
      <h1>Inventario de productos</h1>
      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Caracteristicas</th>
            <th>Empresa</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((item, id) => (
            <ProductCard key={id} product={item} />
          ))}
        </tbody>
      </table>

      <button>Descargar inventario (PDF)</button>
    </>
  );
};

export default Inventario;
