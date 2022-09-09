const miniBar = document.getElementById('mini-bar');
const Nav = document.getElementById('nav');

window.addEventListener('scroll' , () =>{
    let h= miniBar.clientHeight+ 2;
    if(window.scrollY >= 60){
        Nav.style.transform = `translateY(-${h}px)`;
    }
    else{
        Nav.style.transform = `translateY(-0px)`;
    }
})


const searchCancel = document.getElementById('search-cancel');
const searchIcon = document.getElementById('search-ic');
const searchBar = document.getElementById('search-bar');

searchIcon.addEventListener('click' , () =>{
    searchBar.classList.toggle('active');
})

searchCancel.addEventListener('click' , () =>{
    searchBar.classList.remove('active');
})

