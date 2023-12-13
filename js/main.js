const accessKey = "osi1HkX5QGBXM8bR1y-mhMrMEQ05RvW5iWvH5z1Mse8"
const formE1 = document.querySelector("form") 
const inputE1 = document.querySelector("#search-input") 
const searchResults = document.querySelector(".search-results") 
const showmore = document.querySelector("#show-more-button") 
var imgs = document.querySelectorAll("img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

let inputData="";
let page = 1;
 async function searchImage(){
  const inputData =  inputE1.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
  const response = await fetch(url)
  const data = await response.json()
  const results = data.results;

  if (page === 1) {
    searchResults.innerHTML = ""
  }

 const resultDatas =  results.map(result =>{
      const imageRapper = document.createElement("div")
      imageRapper.classList.add("search-result")
      const image = document.createElement("img")
      image.src = result.urls.small;
      image.alt = result.alt_description;
      const imageLink = document.createElement("a")
      imageLink.href = result.links.html
      imageLink.target = "_blank";
      imageLink.textContent = result.alt_description;

      imageRapper.appendChild(image)
      imageRapper.appendChild(imageLink)
      searchResults.appendChild(imageRapper)

// console.log(image);
return image
  })

  page++
  if (page > 1) {
    showmore.style.display = "block";
  }
  resultDatas.forEach((img)=>{
    img.addEventListener("click", function (){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      })
 })
}

formE1.addEventListener("submit", (event)=>{
    event.preventDefault()
    page = 1;
    searchImage();
})
showmore.addEventListener("click", ()=>{
    searchImage();
})


var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

 imgs.forEach((img)=>{
    img.addEventListener("click", function (){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      })
 })


// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}