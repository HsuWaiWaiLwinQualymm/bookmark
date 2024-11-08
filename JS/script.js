const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

const tablink = document.getElementsByClassName("tab-link");

const image = document.getElementById("image");

const heading = document.getElementById("heading");
const paragraph = document.getElementById("paragraph");

tablink[0].onclick = function(){
    image.src = "images/illustration-features-tab-1.svg";
    heading.innerHTML = "Bookmark in one click";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
}

tablink[1].onclick = function(){
    image.src = "images/illustration-features-tab-2.svg";
    heading.innerHTML = "Intelligent search";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
}

tablink[2].onclick = function(){
    image.src = "images/illustration-features-tab-3.svg";
    heading.innerHTML = "Share your bookmarks";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
}


function remove(){
    for (a of tablink){
        a.classList.remove("active");
    }
}

const controls = document.getElementsByClassName("faq-item");
const dropMenu = document.getElementsByClassName("item-text");


controls[0].onclick = function(){
    if(dropMenu[0].style.display == "none"){
        dropMenu[0].style.display = "block";
    }
    else{
        dropMenu[0].style.display = "none";
    }
}

controls[1].onclick = function(){
    if(dropMenu[1].style.display == "none"){
        dropMenu[1].style.display = "block";
    }
    else{
        dropMenu[1].style.display = "none";
    }
}

controls[2].onclick = function(){
    if(dropMenu[2].style.display == "none"){
        dropMenu[2].style.display = "block";
    }
    else{
        dropMenu[2].style.display = "none";
    }
}

controls[3].onclick = function(){
    if(dropMenu[3].style.display == "none"){
        dropMenu[3].style.display = "block";
    }
    else{
        dropMenu[3].style.display = "none";
    }
}
