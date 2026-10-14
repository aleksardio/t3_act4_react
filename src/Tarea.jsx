
function Tarea({ tarea, alCompletar, alEliminar }) {
  return (
    <li className={tarea.completada ? 'completada' : ''}>
      <label>
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => alCompletar(tarea.id)}
        />

        <span>{tarea.texto}</span>
      </label>

      <button
        className="boton-eliminar"
        onClick={() => alEliminar(tarea.id)}
      >
        Eliminar
      </button>
    </li>
  )
}

export default Tarea
