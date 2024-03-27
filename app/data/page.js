async function fetchData() {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos")
    data = await data.json()
    return data
}

async function Data() {
    let todo = await fetchData()
    console.log(todo)

  return (
    <div>
        {todo?.map((todo) => (
            <p key={todo.id}>{todo.title}</p>
        ))}
    </div>
  )
}

export default Data