import { nanoid } from "nanoid"

export default [
  {
    id: nanoid(),
    title: "First task",
    done: true,
    createdAt: new Date(2021, 1, 1),
    important: 0,
  },
  {
    id: nanoid(),
    title: "Second task",
    done: false,
    createdAt: new Date(2021, 1, 2),

    important: 2,
  },
]
