const userColumn = document.querySelector('th:nth-child(1)');
const idColumn = document.querySelector('th:nth-child(2)');
const titleColumn = document.querySelector('th:nth-child(3)');
const completedColumn = document.querySelector('th:nth-child(4)');

fetch(`https://jsonplaceholder.typicode.com/todos`)
  .then((res) => res.json())
  .then((res) => {
    res.slice(0, 50).forEach((item, i) => {
      userColumn.innerHTML += `<td><br><br>${item.userId}</td> <br>`;
      idColumn.innerHTML += `<td><br><br>${item.id}</td> <br>`;
      titleColumn.innerHTML += `<td><br><br>${item.title}</td> <br>`;
      completedColumn.innerHTML += `<td><br><br>${item.completed}</td> <br>`;
    })
  })


