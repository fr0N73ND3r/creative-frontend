const byCreatedAtDesc = (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
const byCreatedAtAsc = (a, b) => a.createdAt.getTime() - b.createdAt.getTime()

export {
  byCreatedAtAsc,
  byCreatedAtDesc,
}
