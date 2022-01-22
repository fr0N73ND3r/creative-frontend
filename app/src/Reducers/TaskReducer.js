import { useReducer } from "react"
import TaskModel from "../Models/TaskModel"

export const ACTION_RESET = "ACTION_RESET"
export const ACTION_CREATE = "ACTION_CREATE"
export const ACTION_DELETE = "ACTION_DELETE"
export const ACTION_TOGGLE_STATE = "ACTION_TOGGLE_STATE"
export const ACTION_TOGGLE_IMPORTANT = "ACTION_TOGGLE_IMPORTANT"

const init = (initialValue) => initialValue.map((payload) => new TaskModel(payload))

const tasksReducer = (state, action) => {
  const filtered = (id) => state.filter((task) => task.id !== id)
  const finded = (id) => state.find((task) => task.id === id)
  const replace = (id, payload) => [new TaskModel(payload), ...filtered(id)]

  const add = (payload) => [new TaskModel(payload), ...state]
  const remove = (id) => filtered(id)
  const toggleState = (task) => replace(task.id, { ...task, done: !task.done })
  const toggleImportant = (task) => replace(
    task.id,
    { ...task, important: (task.important + 1) % 4 },
  )

  switch (action.type) {
    case ACTION_CREATE:
      return add(action.payload)
    case ACTION_DELETE:
      return remove(action.payload)
    case ACTION_TOGGLE_STATE:
      return toggleState(finded(action.payload))
    case ACTION_TOGGLE_IMPORTANT:
      return toggleImportant(finded(action.payload))
    case ACTION_RESET:
      return init(action.payload)
    default:
      throw new Error()
  }
}

export default (initialState) => useReducer(tasksReducer, initialState, init)
