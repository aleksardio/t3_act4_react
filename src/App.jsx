
import { useState } from 'react'
import Tarea from './Tarea'
import Encabezado from './Encabezado'
import './App.css'

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Estudiar React', completada: false },
    { id: 2, texto: 'Realizar la tarea de programación', completada: false },
    { id: 3, texto: 'Practicar JavaScript', completada: false }
  ])

  const [nuevaTarea, setNuevaTarea] = useState('')

  function agregarTarea() {
    if (nuevaTarea.trim() === '') {
      return
    }

    const tarea = {
      id: Date.now(),
      texto: nuevaTarea.trim(),
      completada: false
    }

    setTareas([...tareas, tarea])
    setNuevaTarea('')
  }

  function completarTarea(id) {
    const listaActualizada = tareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completada: !tarea.completada }
      }

      return tarea
    })

    setTareas(listaActualizada)
  }

  function eliminarTarea(id) {
    const listaActualizada = tareas.filter((tarea) => tarea.id !== id)
    setTareas(listaActualizada)
  }
  function limpiarCompletadas() {
    const tareasPendientes = tareas.filter((tarea) => !tarea.completada)
    setTareas(tareasPendientes)
  }

  return (
    <div className="contenedor">
      <Encabezado/>
      <div className="formulario">
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={nuevaTarea}
          onChange={(evento) => setNuevaTarea(evento.target.value)}
          onKeyDown={(evento) => {
            if (evento.key === 'Enter') {
              agregarTarea()
            }
          }}
        />

        <button onClick={agregarTarea}>Agregar</button>
      </div>

      <ul>
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            tarea={tarea}
            alCompletar={completarTarea}
            alEliminar={eliminarTarea}
          />
        ))}
      </ul>
        <div className="footer-tareas">
        <p className="tareas-pendientes">
          Tareas pendientes: {tareas.filter((tarea) => !tarea.completada).length}
        </p>
        {tareas.some((tarea) => tarea.completada) && (
          <button className="boton-limpiar" onClick={limpiarCompletadas}>
            Limpiar completadas
          </button>
        )}
      </div>
    </div>
    
  )
}

export default App
