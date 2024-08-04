/*
function logAbc() {
  console.log("abc");
}

function resolvePromise(resolve) {
  console.log("def");
  resolve("ghi");
}

function handlePromise(data) {
  console.log(data);
}

function executePromise(resolve) {
  return setTimeout(() => resolvePromise(resolve), 1000);
}

setTimeout(logAbc, 1000);

new Promise(executePromise).then(handlePromise);

Promise.resolve("jkl").then(handlePromise);

console.log("mno");

*/
/*
setTimeout(() => {
  console.log("abc");
}, 1000);

new Promise((resolve) => {
  setTimeout(() => {
    console.log("def");
    resolve("ghi");
  }, 1000);
}).then((data) => {
  console.log(data);
});

Promise.resolve("jkl").then((data) => {
  console.log(data);
});

console.log("mno");

*/

/*

const logAfterTimeout = () => {
  setTimeout(() => {
    console.log("abc");
  }, 1000);
};

const createPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("def");
      resolve("ghi");
    }, 1000);
  });
};

logAfterTimeout();

createPromise().then((data) => {
  console.log(data);
});

Promise.resolve("jkl").then((data) => {
  console.log(data);
});

console.log("mno");

*/

/*
function logAbc() {
  console.log("abc");
}

function resolvePromise(resolve) {
  console.log("def");
  resolve("ghi");
}

function handlePromise(data) {
  console.log(data);
}

function namedResolvePromise(resolve) {
  resolvePromise(resolve);
}

function executePromise(resolve) {
  return setTimeout(namedResolvePromise.bind(null, resolve), 1000);
}

setTimeout(logAbc, 1000);

new Promise(executePromise).then(handlePromise);

Promise.resolve("jkl").then(handlePromise);

console.log("mno");
*/

async function fetchData() {
  try {
    console.log("Start fetching data");

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();

    console.log("Data fetched successfully:", data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }

  console.log("End of fetchData function");
}

console.log("Before calling fetchData");
fetchData();
console.log("After calling fetchData");
