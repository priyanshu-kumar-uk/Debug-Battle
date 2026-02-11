import{videos} from "./video Data/videosData (1).js"

let container = document.querySelector(".container")
 let inputs = document.querySelector("input")
 let micBtn = document.querySelector(".mic")
let data = function(videos){
    container.innerHTML = "";
    videos.forEach(v=>{
    container.innerHTML +=`    <div class="box">
            <div class="video">
            <img src=${v.thumbnail} alt="">
            </div>
        <div class="chanel">
            <div class="info">
                <div class="chanel-icon">
                 <img src="${v.thumbnail}" alt="">
                </div>
            <div class="title">${v.title}</div>
            </div>
            <div class="chanel-name">
                <h5>${v.channel}</h5>
                <div class="views">
                    <p>${v.views}</p>
                     <p class="time">${v.time}</p>
                     </div>
                     </div>
                     </div>
                     </div>`
})
}                    
 data(videos)   
         
inputs.addEventListener("input", () => {
  let searchText = inputs.value.toLowerCase();

  let filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchText)
  );
  data(filteredVideos)
});










