const ProductCard = ({ product }) => {
  return (
    <tr>
      <td>{product.codigo}</td>
      <td>{product.nombre}</td>
      <td>
        {product.caracteristicas.map((item, id) => (
          <ul key={id}>
            <li>{item}</li>
          </ul>
        ))}
      </td>
      <td>{product.empresa}</td>
      <td>${product.precio}</td>
    </tr>
  );
};

export default ProductCard;
