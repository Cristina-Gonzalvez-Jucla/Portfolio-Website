function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
  document.getElementById("mySideNavBG").style.width = "100vw";
  document.getElementById("mySideNav").style.zIndex="3"
}

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}

function bkgDark() {
    document.getElementById("bd").style.background = "#8080808c";
}

function bkgDflt() {
    document.getElementById("bd").style.filter = "unset";
}

function divLaydDark() {
  document.getElementById("bd").style.width = "0";
}

function divLaydDarkOpen() {
  document.getElementById("bd").style.width = "118vw";
  document.getElementById("bd").style.display = "block";
  document.getElementById("bd").style.display = "block";
}

