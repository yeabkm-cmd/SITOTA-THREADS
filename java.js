const header = document.queryselector("header");

window.addeventlistener("scroll",function(){
	header.classlist.toggle ("sticky",this.window.scrolly > 0)
;}
let menu = document.querySelector("#menu-icon");
let navmenu = document.querySelector(".navmenu");

menu.onclick = () => {
    navmenu.classList.toggle("open");
};

