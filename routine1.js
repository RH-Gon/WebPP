var site = document.getElementsByTagName("html");
function headerResize() 
    document.getElementsByTagName("header").style.width = site.style.width;
    site.style.backgroundcolor = "blue";
    alert("hi");
}
function footerResize() {
    document.getElementsByTagName("footer").style.width = site.style.width;
}