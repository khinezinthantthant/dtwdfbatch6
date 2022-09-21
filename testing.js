let val;

val=document;
val=document.doctype;
val=document.head;
val=document.body;
val=document.URL;

		// array
val=document.links;//HTMLCOLLECTION
val=document.links[0];
val=document.links[3];
val=document.links[0].id;
val=document.links[0].className;
val=document.links[0].classList;//DOMTOKENLIST
val=document.links[0].classList[0];
val=document.links[0].classList[1];

val=document.forms;//HTMLCOLLECTION
val=document.forms[0];
val=document.forms[0].id;
val=document.forms[0].className;
val=document.forms[0].classList;
val=document.forms[0].classList[0];
val=document.forms[0].action;
val=document.forms[0].method;

val=document.images;//HTML COLLECTION
val=document.images[0];
val=document.images[0].src;
val=document.images[0].className;
val=document.images[0].classList;
val=document.images[0].classList[0];
val=document.images[0].alt;
val=document.images[0].getAttribute('tag');

val=document.scripts;//HTML COLLECTION
val=document.scripts[0];
val=document.scripts[0].src;
val=document.scripts[0].type;
val=document.scripts[0].getAttribute('src');
val=document.scripts[0].getAttribute('type');
// console.log(val);

// Change Styling

document.getElementById("tasktitle").style.background="grey";
document.getElementById('tasktitle').style.color="#fff";
document.getElementById("tasktitle").style.padding="5px";

// Change Content
// document.getElementById("tasktitle").textContent="My List";
// document.getElementById("tasktitle").innerText="My Tasks";
document.getElementById("tasktitle").innerHTML=`<span style="color:yellow;">My Jobs</span>`;


// Call to Class Name
let lis=document.getElementsByClassName("list-group-item");//HTML COLLECTION (ARRAY)
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color="blue";
// lis[1].textContent="Have to visit";


// Call to Tag
// let litags=document.getElementsByTagName("li");//HTML COLLECTION
// console.log(litags);
// console.log(litags[0]);
// litags[0].style.color="red";
// litags[1].innerText="Have to cook";


// querySelector
// console.log(document.querySelector("#tasktitle"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h3"));

// console.log(document.querySelector("li"));
// document.querySelector("li").style.color="red";
// document.querySelector("ul li").style.color="blue";
// document.querySelector("ul li:nth-child(odd)").style.background="silver";
// document.querySelector("ul li:nth-child(even)").style.background="grey";
// document.querySelector("ul li:last-of-type").style.color="green";
// document.querySelector("ul li:nth-of-type(3)").textContent="Have to read";

const listitems = document.querySelector("ul").getElementsByClassName("list-group-item");
// console.log(listitems);

// document.querySelector('ul li:nth-child(odd)').style.background="silver";
// document.querySelector('ul li:nth-of-type(even)').style.background="grey";

// console.log(typeof listitems);

let arritems = Array.from(listitems);
// console.log(arritems);

arritems.forEach(function(arritem,index){
	// console.log(arritem);
	// arritem.textContent="Hello";
	// arritem.innerText = `${index} : Hello`;
});


// querySelectorAll
let its = document.querySelector('ul.list-group li.list-group-item');
// console.log(its);

let itms = document.querySelectorAll('ul.list-group li.list-group-item');
// console.log(itms);
// console.log(itms[0]);

// itms.forEach(function(itm,index){
// 	// console.log(itm);
// 	// itm.textContent = "Hello";
// 	itm.innerText = `${index} : Hello World`
// });

const liodd = document.querySelectorAll('li:nth-child(odd)');
const lieven = document.querySelectorAll('li:nth-child(even)');
// console.log(liodd);
// console.log(lieven);


// liodd.forEach(function(li,index){
// 	// console.log(li);
// 	li.style.background="grey";
// });

// for(let i=0; i<lieven.length;i++){
// 	console.log(lieven[i]);
// 	lieven[i].style.background="silver"
// }



// children

let chl;

const getul = document.querySelector('ul.list-group');
// console.log(getul);
const getli = document.querySelector("li.list-group-item:first-child");
// console.log(getli);

chl = getul.children;//HTML Collection
// console.log(chl);
// console.log(chl[0]);
chl = getul.children[1];
// console.log(chl);

// getul.children[1].innerHTML=`Have to read  <a href="#" id="delete-item2" class="delete-item"><i class="fa-solid fa-trash-can"></i></a>`;

// children of children

chl = getul.children[1].children;//HTML COLLECTION
chl = getul.children[1].children[0];
chl = getul.children[1].children[0].className;
chl = getul.children[1].children[0].classList;//DOM Token List
chl =getul.children[1].children[0].getAttribute('href');


chl = getul.children[0].children[0].children;
chl = getul.children[0].children[0].children[0];


// First Element Child
chl = getul.firstElementChild;


// Last Element Child
chl = getul.lastElementChild;

// Child Element Count
// chl = getul.children.length;
chl = getul.childElementCount;
chl = getul.children[0].childElementCount;
chl = getul.children[0].children[0].childElementCount;

console.log(chl);