function nextScreen(num) {
  const current = document.querySelector(".screen.active");
  
  if (current) {
    current.classList.remove("active");
  }

  document.getElementById("screen" + num).classList.add("active");
}