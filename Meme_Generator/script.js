const generateMemebtn = document.querySelector(".meme-box .meme-generate-btn");
const memePic = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");

const updateDetais = (url,title) => {
    memePic.setAttribute("src",url);
    memeTitle.innerHTML = title;
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then((data) => {
        updateDetais(data.url,data.title);
    });
};
generateMemebtn.addEventListener("click",generateMeme);
generateMeme();