// all'avvio della pagina sono eseguite i seguenti settaggi di default
const hero_content = document.getElementById("hero");
const default_div = "esperienza";

function on_load(_default) {
  for (let i = 0; i < hero_content.children.length; i++) {
    let current_element = hero_content.children[i];
    if (current_element.id != _default) {
      current_element.classList.add("__hidden");
    }
  }
}

on_load(default_div);
