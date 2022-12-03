// you can write your js code here
var addBkm = JSON.parse(localStorage.getItem("bookmark-list")) || [];
window.addEventListener("load", function () {
    displayMth(addBkm);
  });

  function displayMth(addBkm){
    document.querySelector("tbody").innerHTML = "";
    addBkm.map(function(elem,idx){
        var tr = document.createElement("tr");
    
        var td1 = document.createElement("td");
        td1.textContent = elem.Name;
    
        var td2 = document.createElement("td");
        td2.textContent = elem.Author;
    
        var td3 = document.createElement("td");
        td3.textContent = elem.Desc;
    
        var td4 = document.createElement("td");
        td4.textContent = elem.Added;
    
        var td5 = document.createElement("td");
        td5.textContent = elem.Category;

        var td6 = document.createElement("td");
          td6.textContent = elem.Price;
    
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
        
    })
}