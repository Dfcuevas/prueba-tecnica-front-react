import { useState } from "react";

const Productos = () => {
  const [data, setData] = useState({
    nombre: "",
    codigo: "",
    caracteristicas: "",
    precio: "",
    empresa: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <main>
      <h1>Registro de productos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                nombre: e.target.value,
              }))
            }
            value={data.nombre}
            type="text"
            id="nombre"
          />
        </div>
        <div>
          <label htmlFor="codigo">Codigo:</label>
          <input
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                codigo: e.target.value,
              }))
            }
            value={data.codigo}
            type="text"
            id="codigo"
          />
        </div>
        <div>
          <label htmlFor="caracteristicas">Caracteristicas:</label>
          <input
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                caracteristicas: e.target.value,
              }))
            }
            value={data.caracteristicas}
            type="text"
            id="caracteristicas"
          />
        </div>
        <div>
          <label htmlFor="precio">Precio:</label>
          <input
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                precio: e.target.value,
              }))
            }
            value={data.precio}
            type="text"
            id="precio"
          />
        </div>
        <div>
          <label htmlFor="empresa">Empresa:</label>
          <input
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                empresa: e.target.value,
              }))
            }
            value={data.empresa}
            type="text"
            id="empresa"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
};

export default Productos;
