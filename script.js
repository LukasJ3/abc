import { result } from "./data.js"
console.log

const infoFromLS = localStorage.getitem("favorites")
console.log(infoFromLS)
const favorites = infoFromLS === null ? [] : JSON.parse(infoFromLS)
console.log(favorites);

if (infoFromLS) {
    localStorage.setItem("favorites", JSON.stringify([]))
    console.log("yra")
} 

const getmovie = (id) => {
    const movie = result.find((element) => element.id === id);
    console.log(movie)
    return movie
};
getmovie(19995)

const getmovie = (id) => {
    const mylikes = {
        id: getmovie(id).id,
        title: getmovie(id).title,
    };
    console.log(mylikes);
    const movieexistsinfavorites = favorites.find((el) => el.id === mylikes.id); 
    if (movieexistsinfavorites) {
        alert("movie already exists in LS");
    } else {
        favorites.push(mylikes);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("movie added to favorites");
    };
}
    myMovie(985939)
    const printData = ()=>{
        const fromLS = localStorage.getItem("favorites");
        console.log("fromLS");

    
    }
    printData();

    const removeFromLS=(id)=>{
        const fromLS=JSON.parse(localStorage.getItem("favorites"));
        const movieIndexx = fromLS.findIndex((movie) => movie.id === id); 
if (movieIndex > -1) {
    alert("movie removed from favorites");
    fromLS.splice(movieIndex, 1);   
    localStorage.setitem("favorites", JSON.stringify(fromLS));
    else
}
    }
