/* LESSON1
 var titles=document.getElementsByClassName('title');
// console.log(Array.isArray(titles))
// console.log(Array.isArray(Array.from(titles)))

Array.from(titles).forEach(function(item){
  console.log(item)
}) */
// LESSON4
//const wmf=document.querySelector('#book-list li:nth-child(2) .name');
//console.log(wmf);

// var books=document.querySelectorAll('#book-list li .name');
// console.log(books);
// Array.from(books).forEach(function(book){
// book.textContent+="dbcbh";	
// })

// const book=document.querySelector('#book-list');
// book.innerHTML="<h2>Books and more books...</h2>";
// book.innerHTML+="<p>This is how you add HTML</p>";

//LESSON#6

// const banner=document.querySelector('#page-banner');
// console.log("Node type is",banner.nodeType);
// console.log("Node name is",banner.nodeName);
// console.log("Node child is",banner.hasChildNodes());

// const clonedBanner=banner.cloneNode(true);
// console.log(clonedBanner);

//LESSON7(1)

const bookList=document.querySelector('#book-list');
/*console.log("The parent node is",bookList.parentNode);
console.log("The element node is",bookList.parentElement.parentElement);
console.log(bookList.children);*/

//LESSON7(2)
/*console.log("booklist next sibling is:",bookList.nextSibling);
console.log("booklist next element sibling is:",bookList.nextElementSibling);

console.log("booklist previous sibling is:",bookList.previousSibling);
console.log("booklist previous element sibling is:",bookList.previousElementSibling);
bookList.previousElementSibling.querySelector('p').innerHTML+='<br/>Too cool for everyone else';
*/
//LESSON9

var btns=document.querySelectorAll('#book-list .delete');
Array.from(btns).forEach(function(btn){
	btn.addEventListener('click',function(e){
		const li=e.target.parentElement;
		li.parentNode.removeChild(li);

	});
});
const link=document.querySelector('#page-banner a');
link.addEventListener('click',function(event){
event.preventDefault();
console.log('navigation to ninja',event.target.textContent,' was prevernted');
});