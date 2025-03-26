function ToogleDropdown() {
  var DropDown = document.getElementById("header-navbar-items-dropdown");
  if (DropDown.style.display === "block") {
    DropDown.style.display = "none";
  } else {
    DropDown.style.display = "block";
  }
}
