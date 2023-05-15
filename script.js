const menuIcon = document.getElementById("menuIcon")
const mobileNav = document.getElementById("mobileNav")
let clicked = true;


function menu() {
  if (!clicked) {
    mobileNav.style.display = "none"
  } else {
    mobileNav.style.display = "block"
  }
  // Toggle the clicked state
  clicked = !clicked;
}
