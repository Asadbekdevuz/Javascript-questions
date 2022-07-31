var welcome = ("Assalamu alaykum! HTML5 & CSS3 vs Bootstrap haqidagi savollarga javob berishga tayyormisiz?");
var firstName = ("Ismingiz nima?").trim();
var question1 = ("HTML ning to'liq shaklini yozing!").trim();
var question2 = ("Inline va inline-block farqi nima?").trim();
var question3 = ("index.htmlga style.css ni qanday ulashni yozing!").trim();
var question4 = ("img atributlarini yozib bering!").trim();
var question5 = ("ul ga beriladigan stillarni yozing?").trim();
var question6 = ("index.html ni script.js ga ulashni yozing!").trim();
var question7 = ("javascriptda malumot turlarini yozing!").trim();
var question8 = ("stringni numberga qoshganda nima bo'ladi?").trim();
var question9 = ("alert bn promptni farqi nimada?").trim();
var question10 = ("console.log vazifasi nima?").trim();
var intro = ("Savollarimizdan mamnunmisiz!!").trim();

var welcomeAlert = alert(welcome);
var userName = prompt(firstName);
var answer1 = prompt(question1);
var answer2 = prompt (question2);
var answer3 = prompt(question3);
var answer4 = prompt(question4);
var answer5 = prompt(question5);
var answer6 = prompt(question6);
var answer7 = prompt(question7);
var answer8 = prompt(question8);
var answer9 = prompt(question9);
var answer10 = prompt(question10);
var confirmIntro = confirm(intro);

var heading = document.createElement("h1");
heading.textContent = `Foydalanuvchi ismi: ${userName}!`;
heading.style.color="yellow";
document.body.appendChild(heading);

var text = document.createElement("p");
text.textContent = `HTML ning to'liq shaklini yozing!: ${answer1};`;
document.body.appendChild(text);

var textTwo = document.createElement("p");
textTwo.textContent = `Inline va inline-block farqi nima?: ${answer2};`;
document.body.appendChild(textTwo);

var textThree= document.createElement("p");
textThree.textContent = `index.htmlga style.css ni qanday ulashni yozing!: ${answer3};`;
document.body.appendChild(textThree);

var textFour = document.createElement("p");
textFour.textContent = `img atributlarini yozib bering!: ${answer4};`;
document.body.appendChild(textFour);

var textFive = document.createElement("p");
textFive.textContent = `ul ga beriladigan stillarni yozing?: ${answer5};`;
document.body.appendChild(textFive);

var textSix = document.createElement("p");
textSix.textContent = `index.html ni script.js ga ulashni yozing!: ${answer6};`;
document.body.appendChild(textSix);

var textSeven = document.createElement("p");
textSeven.textContent = `javascriptda malumot turlarini yozing?: ${answer7};`;
document.body.appendChild(textSeven);

var textEight = document.createElement("p");
textEight.textContent = `stringni numberga qoshganda nima bo'ladi?: ${answer8};`;
document.body.appendChild(textEight);

var textNine = document.createElement("p");
textNine.textContent = `alert bn promptni farqi nimada?: ${answer9};`;
document.body.appendChild(textNine);

var textTen = document.createElement("p");
textTen.textContent = `console.log vazifasi nima?: ${answer10};`;
document.body.appendChild(textTen);

var textEleven = document.createElement("p");
textEleven.textContent = `Javoblardan ko'nglingiz to'lmagan bo'lsa testni qaytadan topshiring!`;
document.body.appendChild(textEleven);


var btnLink = document.createElement("a");
btnLink.textContent = `qayta topshirish!`;
document.body.appendChild(btnLink);

btnLink.setAttribute("href", "index.html");

document.body.style.backgroundColor="#014E56";
document.body.style.textAlign="center";
document.body.style.color="white";
// document.body.style.paddingLeft="35%";


textEleven.style.color="red";

// btnLink.style.display="inline-block";
// btnLink.style.marginLeft="10%";
btnLink.style.backgroundColor="red";
btnLink.style.border="solid 2px white";
btnLink.style.textDecoration="none";
btnLink.style.padding="10px";
btnLink.style.cursor="pointer";
btnLink.style.color="white";
btnLink.style.borderRadius="10px";
btnLink.type="submit";


