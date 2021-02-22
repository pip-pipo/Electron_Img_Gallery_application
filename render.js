// https://source.unsplash.com/1600x900/?nature,water

const api_img =document.querySelector('#api_Img');
const SearchQuery = document.querySelector('#search');
console.log(SearchQuery)
console.log(api_img)
SearchQuery.addEventListener('keyup',function(e){
  const value = toString(e.target.value);
  api_img.setAttribute('src',`https://source.unsplash.com/1600x900/?${value},${value}`)
});


