//golbal variable used to store the memory address of a function in $(document).ready
var openTab = "";

//initiate jquery
$(document).ready(function () {
  //declares constant color variables
  const background_color_selected = "#7FFFD4";
  const text_color_selected = "black";
  const text_color_not_selected = "white";
  const background_color_not_selected = "#555";

  //function used to convert a hex value to RGB
  function hexToRgb(hex){
    const red = parseInt(hex.substring(1, 3), 16);
    const green = parseInt(hex.substring(3, 5), 16);
    const blue = parseInt(hex.substring(5, 7), 16);
    return `rgb(${red}, ${green}, ${blue})`;
  }

  //Changes a - element to +
  function plus_shows(element){
    let plus = element.querySelector('svg');
    plus.setAttribute('class', 'bi bi-plus plus'); 

    let minus = plus.querySelector('path');
    minus.setAttribute('d', 'M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z');
  }

  //Changes a + element to -
  function minus_shows(element){
    let plus = element.querySelector('svg');
    plus.setAttribute('class', 'bi bi-dash plus'); 

    let minus = plus.querySelector('path');
    minus.setAttribute('d', 'M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z');
  }

  //Initilizes the accordion listener
  function slider_init_accordion(accordion){
    let acc = document.getElementsByClassName(accordion);
      let i;

      for (i = 0; i < acc.length; i++) {
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", toggle);
        }
      }
  }

  //Removes the accordion listener
  function slider_remove_accordion(accordion){
    let acc = document.getElementsByClassName(accordion);
      let i;

      for (i = 0; i < acc.length; i++) {
        acc[i].removeEventListener("click", toggle);
      }
  }

  //used to toggle between hiding and showing the active panel
  function toggle(){
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        plus_shows(this);
        panel.style.display = "none";
      } else {
        minus_shows(this);
        panel.style.display = "block";
      }
  }

  //function used to open a tab
  openTab = function (tabName, elmnt1, elmnt2, elmnt3, accordion) {
    //variable used to hide the current element
    let hide = document.getElementById(tabName);

    //When the tab is clicked for a second time, reset the tab
    if (elmnt1.style.backgroundColor === hexToRgb(background_color_selected)){
      elmnt1.style.backgroundColor = background_color_not_selected;
      elmnt1.style.color = text_color_not_selected;
      hide.style.display = "none";

      plus_shows(elmnt1);
      return;
    }
      
    //declare variables
    let i, tabcontent;

    //set the other tabs elements
    elmnt2 = document.getElementById(elmnt2);
    elmnt3 = document.getElementById(elmnt3);

    //hide all other tabs except the current element
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    //show the specific tab content
    document.getElementById(tabName).style.display = "block";

    //set the colors of the elements
    elmnt1.style.backgroundColor = background_color_selected;
    elmnt1.style.color = text_color_selected;

    elmnt2.style.backgroundColor = background_color_not_selected;
    elmnt2.style.color = text_color_not_selected;
    
    elmnt3.style.backgroundColor = background_color_not_selected;
    elmnt3.style.color = text_color_not_selected;

    //shows the minus sign if the tab is open
    minus_shows(elmnt1);

    //sets other elements to plus 
    plus_shows(elmnt2);
    plus_shows(elmnt3);

    if (accordion === 1) {
      //remove non used accordion listener
      slider_remove_accordion("accordion2");

      //add current accordion listener
      slider_init_accordion("accordion1");
    }
      
    else if (accordion === 2) {
      //remove non used accordion listener
      slider_remove_accordion("accordion1");

      //add current accordion listener
      slider_init_accordion("accordion2");
    }
      
  };
});
