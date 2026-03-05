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


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();

  recognition.continuous = false; 
  recognition.lang = "en-US"; 
  recognition.interimResults = false;

  micBtn.addEventListener("click", () => {
    recognition.start();
    console.log("Listening...");
  });

  recognition.onresult = (event) => {
    let voiceText = event.results[0][0].transcript;
    console.log("You said:", voiceText);

    inputs.value = voiceText; 

    let searchText = voiceText.toLowerCase();

    let filteredVideos = videos.filter(video =>
      video.title.toLowerCase().includes(searchText)
    );

    data(filteredVideos);
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error", event.error);
  };

} else {
  alert("Your browser does not support Speech Recognition");
}








