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
     },
     Mujammil: {
          name: "Mujammil",
          image: [
               {
                    img: "./assests/mujammil20.jpg",
               },
               {
                    img: "./assests/mujammil1.jpg",
               },
               {
                    img: "./assests/mujammil2.jpg",
               },
               {
                    img: "./assests/mujammil3.jpg",
               },
               {
                    img: "./assests/mujammil4.jpg",
               },
               {
                    img: "./assests/mujammil5.jpg",
               },
               {
                    img: "./assests/mujammil6.jpg",
               },
               {
                    img: "./assests/mujammil7.jpg",
               },
               {
                    img: "./assests/mujammil8.jpg",
               },
               {
                    img: "./assests/mujammil9.jpg",
               },
               {
                    img: "./assests/mujammil10.jpg",
               },
               {
                    img: "./assests/mujammil11.jpg",
               },
               {
                    img: "./assests/mujammil12.jpg",
               },
               {
                    img: "./assests/mujammil13.jpg",
               },
               {
                    img: "./assests/mujammil14.jpg",
               },
               {
                    img: "./assests/mujammil15.jpg",
               },
               {
                    img: "./assests/mujammil16.jpg",
               },
               {
                    img: "./assests/mujammil17.jpg",
               },
               {
                    img: "./assests/mujammil18.jpg",
               },
               {
                    img: "./assests/mujammil19.jpg",
               },
          ]
     }
};

let inpt = document.querySelector("#inpt1");
let submit = document.querySelector("#submit");
let header = document.querySelector("header");
let h2 = document.querySelector("h2");

submit.addEventListener("click", function () {
     let name = (inpt.value).trim();
     if ("Abid" == name) {
          for (let i = 0; i < 5; i++) {
               let imag = document.createElement("img");
               let images = document.body.appendChild(imag);
               images.setAttribute("class", "images");
               images.src = data.Abid.image[i].img;
          };
     };

     if ("Sazid" == name) {
          for (let i = 0; i < 5; i++) {
               let imag = document.createElement("img");
               let images = document.body.appendChild(imag);
               images.setAttribute("class", "images");
               images.src = data.Sazid.image[i].img;

          };
     };

     if ("Mujammil" == name) {
          for (let i = 0; i < 20; i++) {
               let imag = document.createElement("img");
               let images = document.body.appendChild(imag);
               images.setAttribute("class", "images");
               images.src = data.Mujammil.image[i].img;
          };
     };
     // else {
     //      h2.innerText = "404 not found";
     // }
     inpt.value = "";
});

const refreshBtn = document.getElementById("refreshBtn");

refreshBtn.addEventListener("click", function () {
     window.location.reload();
});

