document.getElementById("theme_select").addEventListener("change", (event) => {
  console.log("DAV");
  const theme = event.target.value;
  //  document.body.setAttribute("data-theme", theme);
  document.body.dataset.theme = theme;
});
//data-theme="dark"
