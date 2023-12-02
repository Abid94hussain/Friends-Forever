const data = {
     Abid: {
          name: "Abid",
          image: [
               {
                    img: "./assests/abid1.jpg",
               },
               {
                    img: "./assests/abid2.jpg",
               },
               {
                    img: "./assests/abid3.jpg",
               },
               {
                    img: "./assests/abid4.jpg",
               },
               {
                    img: "./assests/abid5.jpg",
               },
          ]
     },
     Sazid: {
          name: "Sazid",
          image: [
               {
                    img: "./assests/sazid1.jpg",
               },
               {
                    img: "./assests/sazid2.jpg",
               },
               {
                    img: "./assests/sazid03.jpg",
               },
               {
                    img: "./assests/sazid5.jpg",
               },
               {
                    img: "./assests/sazid6.jpg",
               },
               {
                    img: "./assests/sazid06.jpg",
               },
               {
                    img: "./assests/sazid7.jpg",
               },
          ]
     }
};

let inpt = document.querySelector("#inpt1");
let submit = document.querySelector("#submit");
let header = document.querySelector("header");

submit.addEventListener("click", function () {
     if (inpt.value == "Abid") {
          for (let i = 0; i < 5; i++) {
               let imag = document.createElement("img");
               let images = document.body.appendChild(imag);
               images.setAttribute("class", "images");
               images.src = data.Abid.image[i].img;
          }
     }

     if (inpt.value == "Sazid") {
          for (let i = 0; i < 5; i++) {
               let imag = document.createElement("img");
               let images = document.body.appendChild(imag);
               images.setAttribute("class", "images");
               images.src = data.Sazid.image[i].img;
          }
     }
});