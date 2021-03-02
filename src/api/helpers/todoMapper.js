function todoMapper(todoData) {
  const { id, task, dueDate } = todoData;

  return {
    id,
    task
  }
}

module.exports = todoMapper;