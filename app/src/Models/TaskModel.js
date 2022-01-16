import { nanoid } from "nanoid"

const IMPORTANT_LOW = 1
const IMPORTANT_MEDIUM = 2
const IMPORTANT_HIGHT = 3

const IMPORTANT_LEVELS = [
  IMPORTANT_LOW,
  IMPORTANT_MEDIUM,
  IMPORTANT_HIGHT,
]

export default class TaskModel {
  #id

  constructor({
    id = nanoid(),
    title = "",
    done = false,
    createdAt = new Date(),
    important = IMPORTANT_LOW,
  }) {
    this.#id = id
    this.title = title
    this.done = done
    this.createdAt = createdAt
    this.important = important
  }

  get id() {
    return this.#id
  }
}

export {
  IMPORTANT_LEVELS,
  IMPORTANT_LOW,
  IMPORTANT_MEDIUM,
  IMPORTANT_HIGHT,
}
