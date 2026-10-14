<h1 align="center">Lista de Tareas - React</h1>

<p align="center">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React">
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript">
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
</p>

<h3 align="center">Instituto Tecnológico Nacional de México - Instituto Tecnológico de Oaxaca</h3>

<div align="center">

| | |
|---|---|
| **Carrera** | Ingeniería en Sistemas Computacionales |
| **Materia** | Programación Web |
| **Docente** | Adelina Martínez Nieto |
| **Alumno** | Aleks Jesús Aquino Rosales |

</div>

---

## 🚀 Descripción del Proyecto

Mini aplicación de TODO construida con React + Vite. Permite gestionar actividades diarias demostrando los fundamentos básicos y esenciales de React: división de la interfaz en componentes, paso de información mediante `props`, manejo de estados con `useState` y renderizado dinámico de listas utilizando `.map()`.

### ✨ Funcionalidades

- **Agregar tareas:** Mediante el botón o presionando la tecla *Enter*.
- **Completar tareas:** Checkbox dinámico que tacha el texto al completarse.
- **Eliminar tareas:** Botón individual para borrar elementos específicos.
- **Limpieza masiva:** Botón condicional para limpiar todas las tareas completadas a la vez.
- **Contador en tiempo real:** Muestra la cantidad exacta de tareas pendientes.

---

## 📂 Estructura del Proyecto

```text
t3_act4_react/
├── public/
├── src/
│   ├── App.jsx           # Componente principal y manejo del estado global
│   ├── App.css           # Estilos principales de la interfaz
│   ├── Encabezado.jsx    # Componente funcional simple (UI)
│   ├── Tarea.jsx         # Componente hijo que recibe props
│   └── main.jsx          # Punto de entrada de React
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 📝 Respuestas al Cuestionario

### a) ¿Qué diferencia hay entre `props` y `state` en React?

Las `props` son datos que un componente recibe de su elemento padre; son estrictamente de solo lectura y el componente hijo no puede modificarlas. El `state` (estado) es información interna y privada del componente que sí es mutable; cuando el estado cambia (mediante su función actualizadora), React re-renderiza el componente automáticamente para mostrar los cambios en pantalla.

**Ejemplo en mi proyecto:** Mi componente `Tarea.jsx` recibe las props `(tarea, alCompletar, alEliminar)` desde `App.jsx`, pero no puede alterarlas directamente. En cambio, `App.jsx` maneja el estado de la lista con `const [tareas, setTareas] = useState([])`, el cual cambia cada vez que agrego o borro algo.

### b) ¿Por qué es importante usar una `key` al renderizar una lista de elementos?

Sin una `key`, React tendría que destruir y volver a dibujar toda la lista completa en el DOM cada vez que hay un cambio. La `key` le proporciona un identificador único a cada elemento, permitiéndole a React saber exactamente qué elemento específico se agregó, modificó o eliminó, ahorrando recursos.

**Ejemplo en mi proyecto:** Uso `key={tarea.id}` al hacer el `.map()` en `App.jsx`. Así, al eliminar una tarea, React sabe exactamente qué etiqueta `<li>` quitar sin afectar a las demás.

### c) Explica con tus propias palabras qué hace la función `useState` y da un ejemplo de dónde la usaste en tu mini aplicación.

Es un Hook que nos permite añadir "memoria" a un componente. Recibe un valor inicial y nos devuelve un arreglo con dos cosas: la variable con el valor actual, y una función especial para actualizar ese valor.

**Ejemplo en mi proyecto:**

```javascript
const [nuevaTarea, setNuevaTarea] = useState('')
```

Aquí `nuevaTarea` guarda lo que el usuario escribe en el input, y `setNuevaTarea` es la función que actualiza ese texto letra por letra gracias al evento `onChange`.

---

## 🔗 Enlaces del Proyecto

- **Repositorio de GitHub:** [https://github.com/aleksardio/t3_act4_react](https://github.com/aleksardio/t3_act4_react)
- **Proyecto desplegado en GitHub Pages:** [https://aleksardio.github.io/t3_act4_react/](https://aleksardio.github.io/t3_act4_react/)

---

## ⚙️ Instrucciones de Ejecución Local

Si deseas correr este proyecto en tu propia máquina:

1. Clonar el repositorio:

```bash
git clone https://github.com/aleksardio/t3_act4_react.git
```

2. Entrar a la carpeta:

```bash
cd t3_act4_react
```

3. Instalar las dependencias:

```bash
npm install
```

4. Levantar el servidor de desarrollo:

```bash
npm run dev
```

5. Abrir en el navegador la dirección que indique la terminal (por lo general `http://localhost:5173`).
