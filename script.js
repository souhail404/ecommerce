
// mini bar show and hide while scrolling 
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


// search bar show and hide
const searchCancel = document.getElementById('search-cancel');
const searchIcon = document.getElementById('search-ic');
const searchBar = document.getElementById('search-bar');

searchIcon.addEventListener('click' , () =>{
    searchBar.classList.toggle('active');
})

searchCancel.addEventListener('click' , () =>{
    searchBar.classList.remove('active');
})




// collection scroll right and left 
const collectionContainer= document.querySelectorAll('.collection-100');

collectionContainer.forEach(container=>{
    const moveRight = container.querySelector('.move-right');
    const moveLeft = container.querySelector('.move-left');
    const colContent = container.querySelector('.content');
    
    
    let rightp = colContent.scrollWidth - colContent.scrollLeft - colContent.clientWidth;
    if(colContent.scrollLeft == 0){
        moveLeft.style.display = 'none';
    }
    if(rightp == 0){
        moveRight.style.display = 'none';
    }
    colContent.addEventListener('scroll' , ()=>{
        rightp = colContent.scrollWidth - colContent.scrollLeft - colContent.clientWidth;
        if(colContent.scrollLeft == 0){
            moveLeft.style.display = 'none';
        }
        else{
            moveLeft.style.display = 'flex';
        }
        if( rightp < 1){
            moveRight.style.display = 'none';
        }
        else{
            moveRight.style.display = 'flex';
        }
    })

    
    moveRight.addEventListener('click' , ()=>{
        colContent.scrollBy(374, 0);
    })
    moveLeft.addEventListener('click' , ()=>{
        colContent.scrollBy(-374, 0);
    }) 
})




