const menuButton=document.querySelector("a.menu-icon");
let closeStatus=false;

menuButton.addEventListener("click", function(event){
    event.preventDefault();
    if(closeStatus==false){
        document.querySelector("nav").classList.add("mobile-menu");
        this.children[0].src="assets/images/icon-close.svg";
        closeStatus=true;
        document.body.style.height='100vw';
        document.body.style.overflow='hidden';
    }
    else{
        document.querySelector("nav").classList.remove("mobile-menu");
        this.children[0].src="assets/images/icon-hamburger.svg";
        closeStatus=false;
        document.body.style.height='auto';
        document.body.style.overflow='auto';
    }
})