"use strict";
document.getElementById("theme_select").addEventListener("change"),
  (event) => {
    const theme = event.target.value;
    document.body.setAttribute("theme_select"), theme;
  };
