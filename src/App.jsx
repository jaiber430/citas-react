// Importar codigo desde otros archivos
import Header from "./components/Header";
// Funcioes arrow = Colocar le nombre de la funcion y se importa todo la ruta
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
// Importar estados
import { useState } from "react";

// props => Propiedades para pasar variables y funciones de otros componentes. (Padre al hijo no a la inversa)
// Ejemplo sintaxis props =>  <heades nombreprops={datos o funciones}/>

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
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
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
      </div>
    </div>
  )
}
export default App 
