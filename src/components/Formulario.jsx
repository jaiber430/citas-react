import { useState, useEffect } from "react";
// useEffect => Se usa para cosnultar apis / Actualizar componentes
import Error from "./error";

// Ejemplo useEffect
// useEffect(()=>{
//   console.log('El componente esta listo');
// },[])

// Ejemplo useState
// const [cliente, setCliente] = useState({});
// const [total, setTotal] = useState(0);
// const [cliente, setCliente] = useState([]);
// const [modal, setModal] = useState(false);

const Formulario = ({ pacientes, setPacientes, paciente }) => {

  // Reglas de Hook => No dentro de condicionales ni al final de return ni dentro
  // Se usa esto para poder mostrar lo que escribe el usuario

  // Forma de crear un state
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(Object.keys(paciente).length > 0)
  }, [paciente])

  const generarId = () => {
    // Crear un id para cada uno  sustraer solo enteros
    const random = Math.random().toString(17).substring(2);
    const arrow = Date.now().toString(17);

    return random + arrow
  }

  // Generarel estado para el botón
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validacion del formulario

    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Hay almenos un campo vacio');
      setError(true);
      return;
    }
    setError(false);

    // Objeto paciente

    // Enviar todo los datos => Crear un objeto
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: generarId(),
    }
    // Pasar datos al momento de enviar ...Crear un arreglo nuevo para nno sustituir datos anteriores
    setPacientes([...pacientes, objetoPaciente]);

    // Reiniciar dormulario cuando se envia (Campos vacios)
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');

  }

  return (
    <div className="md: w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {' '}
        <span className="text-indigo-600 font-bold">
          Administralos
        </span>
      </p>

      <form
        // Onsubmit  enviar
        onSubmit={handleSubmit}
        action=""
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" >
        {/* Mostar mensaje de error */}
        {/* {error && <Error  mensaje='Todos los campos son obligatorios'/>} */}
        {/* Usar children es mejor (Dinamico)*/}
        {error && <Error><p>'Todos los campos son obligatorios'</p></Error>}
        <div className="mt-5">
          {/* HtmlFor => Activa input correspondiente (id) */}
          <label
            htmlFor="pet"
            className="block text-gray-700 uppercase font-bold">
            Nombre mascota
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            // Esto es lo que el usuario escribe
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mt-5">
          {/* HtmlFor => Activa input correspondiente (id) */}
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mt-5">
          {/* HtmlFor => Activa input correspondiente (id) */}
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email contacto propietario"
            className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-5">
          {/* HtmlFor => Activa input correspondiente (id) */}
          <label htmlFor="dateHeight" className="block text-gray-700 uppercase font-bold">
            Fecha
          </label>
          <input
            id="dateHeight"
            type="date"
            className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mt-5">
          {/* HtmlFor => Activa input correspondiente (id) */}
          <label htmlFor="Sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea
            id="Sintomas"
            className="border-2 w-full mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sitomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors mt-5 rounded-md"
          value='Agregar Paciente' />
      </form>
    </div>
  )
}

export default Formulario