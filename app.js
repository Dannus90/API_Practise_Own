const innerEl = document.querySelector(".innerEl");
const inputListener = document.querySelector(".inputStyle");
const output = document.querySelector(".output-dynamic");
const containerDyn = document.querySelector(".container-dynamic");
const showFilterOutput = document.querySelector(".showFilterOutput");

// Planets
let planetData = [];
// Fetching Planets static and displaying on screen
async function fetchPlanets() {
  const resp = await fetch("https://swapi.py4e.com/api/planets");
  const data = await resp.json();
  const results = data.results;
  planetData.push(...results);
  let output = "";
  results.forEach((result) => {
    output += `<div class="divStyle"><span class="spanStyle">${result.name.toUpperCase()}</span> <span class="spanStyle">${result.terrain.toUpperCase()}</span> <span class="spanStyle">${
      result.population
    }</span></div>`;
  });
  innerEl.innerHTML = output;
}

fetchPlanets();

// Listenening to input change and displaying search text and content

inputListener.addEventListener("input", (e) => {
  output.innerHTML = e.target.value;
  if (output.innerHTML) {
    containerDyn.classList.add("output-dynamicInv");
  } else {
    containerDyn.classList.remove("output-dynamicInv");
  }

  const searchTerm = e.target.value.toLowerCase();

  let outputDisplay = "";
  function outputData() {
    planetData.forEach((planet) => {
      if (planet.name.toLowerCase().includes(searchTerm)) {
        outputDisplay += `<div class="showResult"><div class="grid-div"><span>${planet.name.toUpperCase()}</span><span>${planet.terrain.toUpperCase()}</span><span>${planet.population.toUpperCase()}</span></div></div>`;
        showFilterOutput.classList.add("visibleFilterOuput");

        if (searchTerm === "") {
          showFilterOutput.classList.remove("visibleFilterOuput");
        }
      }

      showFilterOutput.innerHTML = outputDisplay;

      if (searchTerm === "") {
        showFilterOutput.innerHTML = "";
      }
    });
  }
  outputData();
});

// showFilterOutput.innerHTML
// result.name.filter((result) =>
// async function outPutDOM() {
//   const resp = await fetch("https://swapi.py4e.com/api/planets");
//   const data = await resp.json();
//   const results = data.results;

//   let output = "";
//   results.forEach((result) => {
//     output += `<div class="divStyle"><span class="spanStyle">${result.name.toUpperCase()}</span> <span class="spanStyle">${
//       result.terrain
//     }</span> <span class="spanStyle">${result.population}<span></div>`;
//   });
//   innerEl.innerHTML = output;
// }

// data.results.map((item) => {
//   return (innerEl.innerHTML = ``);
