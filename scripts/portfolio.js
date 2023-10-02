var background_color_selected = "#7FFFD4";
var text_color_selected = "black";
var text_color_not_selected = "white";
var background_color_not_selected = "#555";

function hexToRgb(hex){
  const red = parseInt(hex.substring(1, 3), 16);
  const green = parseInt(hex.substring(3, 5), 16);
  const blue = parseInt(hex.substring(5, 7), 16);
  return `rgb(${red}, ${green}, ${blue})`;
}

function plus_shows(element){
  let plus = element.querySelector('svg');
  plus.setAttribute('class', 'bi bi-plus plus'); 

  let minus = plus.querySelector('path');
  minus.setAttribute('d', 'M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z');
}

function minus_shows(element){
  let plus = element.querySelector('svg');
  plus.setAttribute('class', 'bi bi-dash plus'); 

  let minus = plus.querySelector('path');
  minus.setAttribute('d', 'M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z');
}

function slider_init_accordion(accordion){
  let acc = document.getElementsByClassName(accordion);
    let i;

    for (i = 0; i < acc.length; i++) {
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", toggle);
      }
    }
}

function slider_remove_accordion(accordion){
  let acc = document.getElementsByClassName(accordion);
    let i;

    for (i = 0; i < acc.length; i++) {
      acc[i].removeEventListener("click", toggle);
    }
}

function toggle(){
      /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          plus_shows(this);
          panel.style.display = "none";
        } else {
          minus_shows(this);
          panel.style.display = "block";
        }
}

function openCity(cityName, elmnt1, elmnt2, elmnt3, accordion) {
  let hide = document.getElementById(cityName);
  if (elmnt1.style.backgroundColor === hexToRgb(background_color_selected)){
    elmnt1.style.backgroundColor = background_color_not_selected;
    elmnt1.style.color = text_color_not_selected;
    hide.style.display = "none";

    plus_shows(elmnt1);
    return;
  }
    
  // Hide all elements with class="tabcontent" by default */
  let i, tabcontent;
  elmnt2 = document.getElementById(elmnt2);
  elmnt3 = document.getElementById(elmnt3);

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Show the specific tab content
  document.getElementById(cityName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt1.style.backgroundColor = background_color_selected;
  elmnt1.style.color = text_color_selected;

  elmnt2.style.backgroundColor = background_color_not_selected;
  elmnt2.style.color = text_color_not_selected;
  
  elmnt3.style.backgroundColor = background_color_not_selected;
  elmnt3.style.color = text_color_not_selected;

  //sets element 1
  minus_shows(elmnt1);

  //sets other elements
  plus_shows(elmnt2);
  plus_shows(elmnt3);

  if (accordion === 1) {
    slider_remove_accordion("accordion2");
    slider_init_accordion("accordion1");
  }
    
  else if (accordion === 2) {
    slider_remove_accordion("accordion1");
    slider_init_accordion("accordion2");
  }
    
}