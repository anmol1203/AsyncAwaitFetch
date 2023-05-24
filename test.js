// console.log("A");

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((res) => console.log(res));

// console.log("B");

async function getData() {
  console.log("A");

  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(res);

  const data = await res.json();

  console.log("B");

  console.log(data);
}

getData();
