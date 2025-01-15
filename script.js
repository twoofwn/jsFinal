function updateImage(imgElement) {
    console.log("Image clicked:", imgElement.alt, imgElement.src);
    
   
    const imageDiv = document.getElementById("image");

    

    
    imageDiv.style.backgroundImage = "url('" + imgElement.src + "')";
}


const images = document.querySelectorAll(".previewImg");
images.forEach(image => {
    image.addEventListener("click", function() {
        updateImage(image);
    });
});


function undoUpdate() {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
    console.log("Undo update performed.");
}


const imgArray = ["img/meo6.jpg", "img/meo7.jpg", "img/meo8.jpg", "img/meo9.jpg", "img/meo10.jpg"];
let currentIndex = 0; 

function traverse() {
    const traverseDiv = document.getElementById("traverse"); 

    setInterval(() => {
     
        traverseDiv.innerHTML = "";

        const img = document.createElement("img");
        img.src = imgArray[currentIndex];
        img.alt = `Image ${currentIndex + 1}`;
        img.style.maxWidth = "100%"; 
        traverseDiv.appendChild(img);

        currentIndex = (currentIndex + 1) % imgArray.length;
    }, 3000); // Cứ mỗi 3 giây lặp lạ
}

traverse();
