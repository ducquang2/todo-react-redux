import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({completed, removed, text ,onToggle, onPrepareRemove, onRemoveTodo }) => (
    <div onAnimationEnd={onRemoveTodo}
    className={`todo ${completed ? "completed" : "uncompleted"}
               ${removed ? "fall" : "" }`}>
     <li className="todo-item">{text}</li>

     <button className="check-btn" onClick={onToggle}>
       <i className="fas fa-check"></i>
     </button>
     <button className="trash-btn" onClick={onPrepareRemove}>
       <i className="fas fa-trash"></i>
     </button>
   </div>
)

Todo.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onPrepareRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  removed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo