const G8 = document.querySelector("#Section2 .group8");

G8.textContent="GROUP8 Hello";



let attr = document.createAttribute("style");

attr.value = "color:red";

G8.setAttributeNode(attr);