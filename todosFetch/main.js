const userColumn = document.querySelector('.th_userId');
const idColumn = document.querySelector('.th_id');
const titleColumn = document.querySelector('.th_title');
const completedColumn = document.querySelector('.th_completed');

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


