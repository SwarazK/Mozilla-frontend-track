let darken_btn = document.querySelector(".btn");
let main_img = document.getElementById("display-img");
let img_array = document.getElementsByClassName("small-img");
let dark_div = document.getElementById("dark-div");

for(let i = 0; i < img_array.length; i++){
    img_array[i].addEventListener("click", changeImage);
}

function changeImage(){
    main_img.setAttribute("src",this.getAttribute("src")); //Inside the called function context this refers to the element that has the listener
}

let current_image_index = 0;
function slideShow(){
    main_img.setAttribute("src",img_array[current_image_index%img_array.length].getAttribute("src")); //Cycles through the images
    current_image_index++;
    if(current_image_index === 50*img_array.length) current_image_index = 0; //To prevent overflow
}

setInterval(slideShow,2000);

function darken(){
    if(dark_div.classList.contains("darken-div")) dark_div.classList.remove("darken-div");
    else dark_div.classList.add("darken-div");
}

darken_btn.addEventListener("click", darken);