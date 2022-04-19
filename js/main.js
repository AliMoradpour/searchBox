const searchBox = document.querySelector('#search-box')
const search = document.querySelector('.search')
const btn = document.querySelector('.icon-search')

btn.addEventListener('click',function(){
    searchBox.classList.toggle('active')
})
