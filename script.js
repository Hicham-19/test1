let x =document.querySelector('.bar-1-1').value;
// alert(x);
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    // header.classList.remove('active');
    // document.body.classList.add('active');
if(scrollY>625){

    document.body.classList.add('active');
}
// 1271.5
else
{
    document.body.classList.remove('active');
}
}

console.log(scrollY);

// let themeToggler = document.querySelector('#theme-toggler');

// themeToggler.onclick = () =>{
//     themeToggler.classList.toggle('fa-sun');
//     if(themeToggler.classList.contains('fa-sun')){
//         document.body.classList.add('active');
//     }else{
//         document.body.classList.remove('active');
//     }
// }