// OBJECTS
const navbar = document.getElementById("navbar");
const nav_border = document.getElementById("nav_border");

// FUNCTIONS

// open/close navbar
function toggle_navbar() {
  if (!navbar.classList.contains("nav__collapsed")) {
    navbar.classList.add("nav__collapsed");
  } else {
    navbar.classList.remove("nav__collapsed");
  }
}

// set content choosen content from navbar
function set_content(choosen_div) {
  for (let i = 0; i < hero_content.children.length; i++) {
    let current_element = hero_content.children[i];
    if (current_element.id != choosen_div) {
      current_element.classList.add("__hidden");
    } else {
      current_element.classList.remove("__hidden");
    }
  }
}

// EVENT LISTENERS
nav_border.addEventListener("click", toggle_navbar);
for (let i = 0; i < navbar.children.length; i++) {
  let nav_entry = navbar.children[i];
  let to_show = nav_entry.id.split("nav_")[1];
  navbar.children[i].addEventListener("click", function () {
    set_content(to_show);
  });
}
