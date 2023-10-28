const nav = ["home", "products", "contacts"];

const links = ["index.html", "products.html", "contacts.html"];

let navText = '<ul class="flex">'

for(i = 0; i <nav.length; i++){
    navText += '<li><a href=" ' + links[i] + ' ">' + nav[i] + "</a></li>";
    console.log(navText);
}

navText += "</ul>"
 
document.getElementById("nav").innerHTML = navText