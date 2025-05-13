import { useState } from "react";

const Empresas = () => {
  const [data, setData] = useState({
    nit: "",
    nombre: "",
    direccion: "",
    telefono: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    console.log("datos enviados", data);
  };
  return (
    <main>
      <h1>Registro de Empresas</h1>
      <form onSubmit={handleChange}>
        <div>
          <label htmlFor="nit">Ingresa el NIT:</label>
          <input
            value={data.nit}
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                nit: e.target.value,
              }))
            }
            type="text"
            id="nit"
          />
        </div>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            value={data.nombre}
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                nombre: e.target.value,
              }))
            }
            type="text"
            id="nombre"
          />
        </div>
        <div>
          <label htmlFor="direccion">Dirección:</label>
          <input
            value={data.direccion}
            type="text"
            id="direccion"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                direccion: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <label htmlFor="telefono">Telefono:</label>
          <input
            value={data.telefono}
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                telefono: e.target.value,
              }))
            }
            type="tel"
            id="telefono"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
};

export default Empresas;
