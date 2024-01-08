
// Adding mouseover event listener
var navItems = document.getElementsByClassName("nav__item");

for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "#ffffff";
    });
}

// Adding mouseout event listener
for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("mouseout", function() {
        this.style.backgroundColor = "#494949";
    });
}