

const themeSwitch= document.getElementById('theme-switch');
const body =document.body;

themeSwitch.addEventListener('change',function(){
     body.classList.toggle('dark-mode');
});



const addToCartButtons = document.querySelectorAll('.images a')

const cartIcon= document.querySelector('.top-navbar .icons a i')

let cartCount=0;
 addToCartButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        cartCount++;
        cartIcon.textContent= cartCount;
    })
 })