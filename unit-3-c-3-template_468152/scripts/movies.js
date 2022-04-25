// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

// http://www.omdbapi.com/?apikey=57507e77&s=avengers

let div=document.getElementById("movies");
let id;

async function searchMovies(){

    try{

        const query=document.getElementById("search").value;

    let res=await fetch(`http://www.omdbapi.com/?apikey=57507e77&s=${query}`);

    let data=await res.json();
    // console.log("data:",data);

    let movies=data.Search;
    // appendMovies(movies);
    return movies;

    }catch(err){
        console.log(err);
    }

    
}

function appendMovies(data){
    // if(data===undefined){
    //     return false;
    // }
    div.innerHTML=null;
    data.forEach((el)=>{

        let img=document.createElement("img");
        img.src=el.Poster;
        

        let p=document.createElement("p");
        p.innerText=el.Title;

        let btn=document.createElement("button");
        btn.innerText="Book Now";
        div.append(img,p,btn);



    });
}
async function main(){
    let data=await searchMovies();
    if(data===undefined){
        return false;
    }
    appendMovies(data);

}

// debouncing

function debounce(func,delay){
    if(id){
        clearTimeout(id);

    }

    id=setTimeout(function(){

        func();

    },delay)
}
