const mainEle = document.querySelector(".main");
const btnEle = document.querySelector(".btn");
const responseContainerEle = document.querySelector(".rc");
const closeIconEle = document.querySelector(".close-icon");

btnEle.addEventListener("click", () => {
    responseContainerEle.classList.remove("active");
});

closeIconEle.addEventListener("click", () => {
    responseContainerEle.classList.add("active");
})