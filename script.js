const buttons = document.querySelector(".btn");
const main = document.querySelector(".main");
const inputs = document.querySelector(".search");
const id = "rJC3zqn7fImNa5o32ktX970LRrrvCuLm8yoUjewIt7E";






// const getData = async () => {
//   try {
//    const sriubaPuode = await fetch("https://dog.ceo/api/breeds/image/random");
//    console.log(sriubaPuode);
//    const sriubaLeksteja = await sriubaPuode.json();
//    console.log(sriubaLeksteja);
//    myImg.src = sriubaLeksteja.message
//   }  
//   catch(err) {
//   console.log(err);
//   }
// }


// buttons.addEventListener("click", getData);




// const getData = async () => {
//   try {
//    const sriubaPuode = await fetch("https://api.thecatapi.com/v1/images/search");
//    console.log(sriubaPuode);
//    const sriubaLeksteja = await sriubaPuode.json();
//    console.log(sriubaLeksteja);
//    myImg.src = sriubaLeksteja[0].url;
//   }  
//   catch(err) {
//   console.log(err);
//   }
// }




// buttons.addEventListener("click", getData);



// const second = () => {
//   setTimeout(() => {
//     console.log("Async Hey There");
//   }, 20000);
// }

// const first = () => {
//   console.log("Hey there");
//   second();
//   console.log("The end");
// }
// first();


// const artWork = function (art) {
//   fetch(`https://api.artic.edu/api/v1/artworks`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       for (let i = 0; i < 6; i++) {
//         const myTitle = document.createElement('h1');
//         const myID = document.createElement('p');
//         const myImg = document.createElement('img');
//         myTitle.textContent = data.data[i].title;
//         myID.textContent = data.data[i].artist_title;
//         main.appendChild(myTitle);
//         main.appendChild(myID);
//         console.log(myTitle);
//         console.log(data.data[i]);
//       }
//     });
// };

// artWork();

let results = "";



const artWork = function () {
  main.replaceChildren();
  fetch(`https://api.unsplash.com/photos/random?client_id=${id}&count=10&query=${results}`).then(function (response){
    console.log(response)
    return response.json();
  }).then(function (data) {
    console.log(data);
     for(let i = 0; i<10; i++) {
      const myImg = document.createElement("img")
      myImg.src = data[i].urls.small;
      main.appendChild(myImg);
     }
         
  });
}




function informacija(e) {
   e.preventDefault()
   results = inputs.value;
   console.log(results);
   artWork();
}


buttons.addEventListener("click", informacija);
