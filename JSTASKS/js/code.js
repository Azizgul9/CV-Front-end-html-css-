function task1(){
		var t="";
		var r1="";
		var r2="";
		r1="Выдаст:<br>";
		for (var i = 0; i < 10; i++) {
			setTimeout(function() {
				t+=" "+i;
				r2="<br>Потому что, проблема впеременной i, проходящая внутри delay(замыкающая) функции setTimeout().Речь не о конкретном значении i в момент цикла,мы просто проходим по i. Затем по времени уже setTimeout() будет воспроизведена, а выражение for уже будет инкрементирована и примет финальное значение"
				document.querySelector('.task--1').innerHTML =r1+ t+r2;  
			}, 0);
		}
	}
function task2(){
		var today = new Date();  
var day = today.getDay();  
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];  
var week="Today is : " + daylist[day] + ".<br>";  
var hour = today.getHours();  
var minute = today.getMinutes();  
var second = today.getSeconds();  
var prepand = (hour >= 12)? " PM ":" AM ";  
hour = (hour >= 12)? hour - 12: hour;  
if (hour===0 && prepand===' PM ')   
{   
if (minute===0 && second===0)  
{   
hour=12;  
prepand=' Noon';  
}   
else  
{   
hour=12;  
prepand=' PM';  
}   
}   
if (hour===0 && prepand===' AM ')   
{   
if (minute===0 && second===0)  
	{   
hour=12;  
prepand=' Midnight';  
}   
else  
{   
hour=12;  
prepand=' AM';  
}   
}  
document.querySelector('.task--a').innerHTML =week+"Current Time : "+hour + prepand + " : " + minute + " : " + second;
	}
function task2b(){
	var str=prompt("enter num");    
	let reversed = "";
  for (var i = str.length - 1; i >= 0; i--){        
    reversed += str[i];
  }    
	document.querySelector('.task--b').innerHTML =reversed;
}
function task2c(){
	var n=parseInt(prompt("Enter a number:",n));
	var k=n;
	for(var i=n-1;i>1;i--){
		n*=i;
	}
	document.querySelector('.task--c').innerHTML =k+"! = "+n;
}
function LargerNum(){
	var a=parseInt(prompt("Enter num1:",a));
	var b=parseInt(prompt("Enter num1:",b));
	var answer=(a>b) ? a : 
	b;
	document.querySelector('.task--d').innerHTML =answer;
}
function ArrayToString(){
	var  myColor = ["Red", "Green", "White", "Black"];
	for(var i=0;i<myColor.length;i++){
			myColor.toString();
			//myColor.join();
			var plus=myColor.join('+');
	}
	document.querySelector('.task--e').innerHTML =myColor+"<br>"+plus;
}
 function GetMonth(){
 	var month="";
 	var month2="";
 	var monthes=["January","February","March","April","May","Jun","July","August","September","October","November","Desember"];
 	var month_name1=new Date("10/11/2009");
 	var month_name2=new Date("11/13/2014");
 	for(var i=0;i<=12;i++){
 	if(i==month_name1.getMonth()){
 		month+=monthes[i];
 	}
 	if(i==month_name2.getMonth()){
 		month2+=monthes[i]
 	}
 }
 	document.querySelector('.task--g').innerHTML =month+"<br>"+month2;
 }
 function isUpper(aChar=prompt("Enter a string:"))
   {	
      var myCharCode = aChar.charCodeAt(0);
   
      if((myCharCode > 64) && (myCharCode <  91))
      {
         answer="Uppercase!";
      }
      else
   			answer="Not an Uppercase!";
   document.querySelector('.task--f').innerHTML =answer;
   }
//draw a smile
function myFace() {  
   var c = document.getElementById("mycanvas");  
  
   //to draw a surface on canvas element pass 2d as an argument in the getContext function  
   var draw = c.getContext("2d");  
  
   //to start a new path invoke BeginPath function.  
   //Call this function when you want to create a new path  
   draw.beginPath();  
  
   //to specify a color or style for your canvas use fillStyle property  
   draw.fillStyle = "yellow";  
  
   //to create a full circle invoke the arc method and in that method  
   //pass the value for x and y, radius, start point,  
   draw.arc(75, 75, 50, 0, Math.PI * 2, true);  
  
   //to close the path invoke the closePath function  
   draw.closePath();  
  
   //invoke fill function to fill the canvas with a circle and in that circle a color of yellow  
draw.fill();  
}  
function myEye() {  
   var c = document.getElementById("mycanvas");  
   var eye = c.getContext("2d");  
   //moveTo function is used to move the starting point of the canvas to a new point  
   //x value is 55 and y value is 50  
   eye.moveTo(55, 50);  
  
   //from the new point, begin a new path  
   eye.beginPath();  
  
   //fill the style with color black  
   eye.fillStyle = "black";  
  
   //left round eye  
   eye.arc(50, 50, 4, 0, Math.PI * 2, true);  
   eye.closePath();  
   eye.fill();  
  
   //move to the new sub path from the current point and create a right eye  
   eye.moveTo(103, 49);  
  
   eye.beginPath();  
   eye.fillStyle = "black";  
   //right round eye  
   eye.arc(100, 50, 4, 0, Math.PI * 2, true);  
   eye.closePath();  
   eye.fill();  
}  
function mySmile() {  
   var c = document.getElementById("mycanvas");  
   var smile = c.getContext("2d");  
   //105 means x it will go the left side and 75 means y it will go upward of //downward  
   smile.moveTo(105, 75);  
   smile.beginPath();  
   smile.strokeStyle = "red";  
   smile.arc(75, 75, 30, 0, Math.PI, false);  
   //to draw a half rounded circle with a line stroke we can invoke the stroke function  
   smile.stroke();  
}  
function bodyLoad() {  
   myFace();  
   myEye(); 
   mySmile(); 
}
function getProperties(){
	var student = { 
name : "David Rayy", 
class : "VI", 
grade : 5 };
document.querySelector('.task--h').innerHTML =Object.getOwnPropertyNames(student);
}
//zadacha4
//zadaniye1
function Rastavlenie(){
	var end=document.getElementById("string-6").childNodes[0].nodeValue;
	document.getElementById("string-6").innerHTML = document.getElementById("string-1").childNodes[0].nodeValue;
	document.getElementById("string-1").innerHTML = document.getElementById("string-3").childNodes[0].nodeValue;
document.getElementById("string-3").innerHTML = document.getElementById("string-2").childNodes[0].nodeValue;
document.getElementById("string-2").innerHTML = document.getElementById("string-5").childNodes[0].nodeValue;
document.getElementById("string-5").innerHTML = document.getElementById("string-4").childNodes[0].nodeValue;
document.getElementById("string-4").innerHTML = end;
}
//zadaniye2
function myFunction() {
    var myNodelist = document.querySelectorAll(".element");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        myNodelist[i].style.color = "green";
        if(i<3){
        	myNodelist[i].style.color = "red";
        }
    }
}
//zadaniye3
function myContainer(){
	var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
	for(var i=0;i<5;i++){
	 var newLi = document.createElement('li');
	 newLi.className="task";
	
  newLi.innerHTML = tasks[i];

  todolist.appendChild(newLi);
}
}
//zadanie5
function Remove(){
var textnode = document.createTextNode("Canned Fish");
 var x = document.getElementById("cartitems");

    x.children[1].remove();
    x.replaceChild(textnode, x.lastChild);
}
//zadaniye6
function addinfo(){
	var ul = document.createElement('ul');
	document.body.appendChild(ul);
	 while (true) {
    var newLi = prompt("Введите текст для пункта списка", "");

    if (newLi === null || newLi===0) {
       break;
    }

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(newLi));
    ul.appendChild(li);
}
}
function hrline(){
//	var all=document.getElementByTagName('*');

var referenceNode = document.querySelectorAll('p');
for(var i=0;i<referenceNode.length;i++){
var newNode = document.createElement('hr');
referenceNode[i].appendChild(newNode);
}
}