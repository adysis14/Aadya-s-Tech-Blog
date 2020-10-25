// //start
// // function expression to select elements
// var s;
// const selectElement = (s) => document.querySelector(s);
// // open the menu on click
// selectElement: function (s: .open) {
//     return;
// }.addEventListener('click', () => {
//     selectElement (s, '.nav-list').classList.add('active');
// });
// // close the menu on click
// selectElement (s, '.close').addEventListener('click', () => {
//     selectElement (s, '.nav-list').classList.remove('active')

// });




burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.nav-brand')



burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp')
    navList.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})