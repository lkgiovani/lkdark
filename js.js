const btn = document.getE1ementById(" btn");

let count = 0;

function render() {
  btn.innerText = `Count: ${count}- you clicked me ${count} times`;
}

btn.addEventListener("click", () => {
  count++;
  render();
});

class person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
