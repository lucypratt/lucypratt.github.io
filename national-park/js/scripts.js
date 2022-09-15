function toggleMenu() {
document.getElementById("navList").classList.toggle("open");
}

const x = document.getElementById("navButton");

x.onclick = toggleMenu;