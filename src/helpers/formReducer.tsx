import { ACTIONS, NewPersonType } from "../types/personTypes";

// fix these anies
export function reducer(state: NewPersonType, action: ACTIONS): NewPersonType {
  switch (action) {
    default:
      return state;
  }
}

// function reducer(todos, action) {
//     switch (action.type) {
//       case ACTIONS.ADD:
//         return [...todos, newTodo(action.payload.name)];

//       case ACTIONS.DELETE: {
//         return todos.filter((todo) => todo.id !== action.payload.id);
//       }
//     }
//   }
