import uuid from "uuid"
export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      const todo = {
        text: action.payload.text,
        id: uuid()
      }
      return { todos: state.todos.concat(todo) };

    case 'DELETE_TODO':
      
      return { todos: state.todos.filter((todo) =>  todo.id !== action.payload)}
    default:
      return state;
  }
}
