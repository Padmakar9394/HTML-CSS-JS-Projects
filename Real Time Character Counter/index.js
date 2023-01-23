const totalEl = document.getElementById("total");
const remEl = document.getElementById("rem");
const inptEl = document.getElementById("inpt");

inptEl.addEventListener("keyup", () => {
    updateCounter();
  });
  
  updateCounter();
  
  function updateCounter() {
    totalEl.innerText = inptEl.value.length;
    remEl.innerText =
      inptEl.getAttribute("maxLength") - inptEl.value.length;
  }

