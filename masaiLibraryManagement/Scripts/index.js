// you can write your js code here
var Lib =JSON.parse(localStorage.getItem("book-list")) || [];
document.querySelector("form").addEventListener("submit",addLaby);
var Cnt = 0 || localStorage.getItem("cnt");

function addLaby(){
   event.preventDefault();
   Cnt++;
    var Name = document.getElementById("name").value;
    console.log(Name);
    var Author = document.getElementById("author").value;
    var Desc = document.getElementById("desc").value;
    var Added = document.getElementById("added").value;
    var Category = document.getElementById("category").value;
    var Price = document.getElementById("price").value;

    var obj = {Name:Name, Author:Author, Desc:Desc, Added:Added, Category:Category, Price:Price};
    Lib.push(obj);
    localStorage.setItem("book-list", JSON.stringify(Lib));
    localStorage.setItem("cnt", Cnt);
    
}