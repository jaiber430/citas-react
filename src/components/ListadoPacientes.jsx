import { useEffect } from 'react'
import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente }) => {

  // console.log(pacientes.length === 0)
  
  return (
    <div className="md: w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {/* Objeto ternario */}
      {pacientes && pacientes.length ?
        (
          <>
            <h2 className="font-black text-3xl text-center">
              Listado pacientes
            </h2>

            <p className="text-xl mt-5 mb-10 text-center">
              Adiministra tus {' '}
              <span className="text-indigo-600 font-bold">
                pacientes y citas
              </span>
            </p>
            {/* el id es una llave unica que se crea desde el formulario */}
            {pacientes.map(paciente => (
              <Paciente
                // Crearla 
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
              />

            ))}
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">
              No hay pacientes
            </h2>

            <p className="text-xl mt-5 mb-10 text-center">
              Comience agregando pacientes {' '}
              <span className="text-indigo-600 font-bold">
                y apareceran en este lugar
              </span>
            </p>
          </>
        )}


    </div>
  )
}

export default ListadoPacientes