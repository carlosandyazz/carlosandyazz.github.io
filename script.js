// ======================================
// ESTRELLAS DEL FONDO
// ======================================

const stars = document.getElementById("stars");


for(let i = 0; i < 180; i++){

    const star = document.createElement("span");

    const size = Math.random() * 3 + 1;


    star.style.position = "absolute";

    star.style.width = size + "px";

    star.style.height = size + "px";

    star.style.borderRadius = "50%";

    star.style.background = "white";


    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";


    star.style.opacity = Math.random();



    star.style.animation =
    `blink ${2 + Math.random()*5}s infinite ease-in-out`;



    stars.appendChild(star);

}





// Animación de estrellas

const style = document.createElement("style");


style.innerHTML = `

@keyframes blink{

    0%{
        opacity:.2;
        transform:scale(1);
    }

    50%{
        opacity:1;
        transform:scale(1.5);
    }

    100%{
        opacity:.2;
        transform:scale(1);
    }

}

`;

document.head.appendChild(style);









// ======================================
// VISOR DE IMÁGENES
// ======================================


const viewer = document.getElementById("viewer");

const viewerImg = document.getElementById("viewerImg");

const close = document.getElementById("close");



const photos = document.querySelectorAll(
".photos img, .final-photo img"
);





photos.forEach(photo => {


    photo.addEventListener("click",()=>{


        viewerImg.src = photo.src;


        viewer.classList.add("active");


    });


});





close.addEventListener("click",()=>{


    viewer.classList.remove("active");


});





viewer.addEventListener("click",(event)=>{


    if(event.target === viewer){

        viewer.classList.remove("active");

    }


});









// ======================================
// COMETA CON ESTELA REALISTA
// ======================================


function createMeteor(){


    const meteor = document.createElement("div");


    let x = -100;

    let y = Math.random() * window.innerHeight * 0.45;



    meteor.style.position = "fixed";

    meteor.style.left = x + "px";

    meteor.style.top = y + "px";


    meteor.style.width = "10px";

    meteor.style.height = "10px";


    meteor.style.borderRadius = "50%";


    meteor.style.background = "#ffffff";


    meteor.style.zIndex = "500";



    meteor.style.boxShadow =

    `
    0 0 10px white,
    0 0 25px #9bdcff,
    0 0 45px white
    `;



    document.body.appendChild(meteor);





    const move = setInterval(()=>{


        x += 14;

        y += 6;



        meteor.style.left = x + "px";

        meteor.style.top = y + "px";







        // Crear partícula de estela

        const particle = document.createElement("div");



        particle.style.position = "fixed";


        particle.style.left =
        (x + Math.random()*10 - 5) + "px";


        particle.style.top =
        (y + Math.random()*10 - 5) + "px";



        const size = Math.random()*5 + 2;



        particle.style.width = size + "px";

        particle.style.height = size + "px";



        particle.style.borderRadius = "50%";


        particle.style.background = "white";


        particle.style.opacity = "0.9";


        particle.style.zIndex = "499";



        particle.style.boxShadow =
        "0 0 10px white";



        document.body.appendChild(particle);





        // Animación de desaparición

        const fade = particle.animate(

            [

                {

                    opacity:0.9,

                    transform:"scale(1)"

                },

                {

                    opacity:0,

                    transform:"scale(0)"

                }

            ],

            {

                duration:900,

                easing:"ease-out"

            }

        );



        fade.onfinish = ()=>{


            particle.remove();


        };







        // Eliminar cometa al salir

        if(x > window.innerWidth + 150){


            clearInterval(move);


            meteor.remove();


        }



    },16);


}





// Aparición del cometa cada cierto tiempo

setInterval(createMeteor,6500);









// ======================================
// ANIMACIÓN INICIAL
// ======================================


window.addEventListener("load",()=>{


    const letter = document.querySelector(".letter");


    if(letter){


        letter.style.opacity="1";


    }


});