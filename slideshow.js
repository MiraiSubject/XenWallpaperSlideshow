let imageIndex = 0;
let imageContainer = document.getElementById("img-container");
for (let imageUrl of imageGallery) {
    let imageElm = document.createElement("img");
    imageElm.src = imageUrl;
    imageElm.style.height = "100%";
    imageElm.style.width = "100%";
    imageElm.style.objectFit = "cover";
    imageElm.style.objectPosition = "center";
    imageElm.style.position = "absolute";
    imageElm.style.top = "0";
    imageElm.classList.add("img-child", "animate-opacity");

    if (imageIndex++ == 0) {
        imageElm.classList.add("show");
    }

    imageContainer.appendChild(imageElm);
}

setInterval(() => {
    if (imageIndex >= imageGallery.length) {
        imageIndex = 0;
    }

    document.querySelectorAll(".animate-opacity").forEach(imgElm => {
        imgElm.classList.remove("show");
    });

    imageContainer.children[imageIndex++].classList.add("show");
}, 10000);
