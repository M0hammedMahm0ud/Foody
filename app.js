// let p = new Promise((res, rej) => {
//   let y = 1;
//   if (y == 10) {
//     res(y);
//   } else {
//     rej("y not equal 10");
//   }
// });

// p.then((fullfilled) => {
//   // return to send data to the next then
//   return (fullfilled /= 10);
// })
//   .then((fullfill) => {
//     if (fullfill == 1) return true;
//   })
//   .then(() => {
//     console.log(`+  + `);
//   })
//   .catch((rejected) => {
//     console.log(rejected);
//   })
//   .finally(() => {
//     console.log("Done ...");
//   });
let main = document.querySelector("main");
let url = "https://dummyjson.com/recipes";
function fetchData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((res) => res.recipes)
    .then((res) => {
      main.innerHTML = "";
      res.map((r) => {
        main.innerHTML += `
      <div class = "mainDiv">
        <img src="${r.image}" alt="" />
        <div class ="mainDiv2">
          <h3>${r.name}</h3>
          <p><strong>Ingredients :</strong>
          <p class ="strongP">
          ${r.ingredients}
          </p>
            </p>
          <a href=""
            >see recipe <i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
        </div>
      </div>
      `;
      });
    });
}
let inputt = document.querySelector("input");
inputt.addEventListener("input", (e) => {
  let inputUrl = e.target.value;
  fetchData(`https://dummyjson.com/recipes/search?q=${inputUrl}`);
});
fetchData(url);
