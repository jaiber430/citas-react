// Importar codigo desde otros archivos
import Header from "./components/Header";
// Funcioes arrow = Colocar le nombre de la funcion y se importa todo la ruta
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
// Importar estados
import { useState, useEffect } from "react";

// props => Propiedades para pasar variables y funciones de otros componentes. (Padre al hijo no a la inversa)
// Ejemplo sintaxis props =>  <heades nombreprops={datos o funciones}/>

function App() {

  const [pacientes, setPacientes] = useState(()=> JSON.parse(localStorage.getItem('pacientes')) || []);
  const [paciente, setPaciente] = useState({});

  // Identificar si hay cosas y las deje 
  // useEffect(() => {
  //   const obtenerLs = () => {
  //     // Obtener datos
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  //     console.log(pacientesLS)
  //   }
  //   // Llamar la función para que se ejecute
  //   obtenerLs()
  // }, [])
  // useEffect(() => {
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes'));
  //     pacientesLS?.length > 0 &&  setPacientes(pacientesLS);
  //   // Llamar la función para que se ejecute
  // }, [pacientes])
  // useEffect => Detectar cambios
  useEffect(() => {
    // Convertir a una cadena
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])
  // Eliminar paciente
  const eliminarPaciente = (id) => {
    // console.log('Eiminando Paciente', id);
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    // console.log(pacientesActualizados)
    setPacientes(pacientesActualizados);

  }

  return (
    // Framin evita crear muchos div para almacenar algo
    <div className="container mx-auto mt-20">
      {/* Forma de traer la función */}
      <Header />
      <div className="mt-12 md: flex">
        <Formulario
          // Traer los datos en props
          // orden no afecta pero es recomendable variable - modificador
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}
export default App 
