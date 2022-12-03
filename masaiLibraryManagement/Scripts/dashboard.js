// you can write your js code here
var stLib = JSON.parse(localStorage.getItem("book-list"));
var addBuy = JSON.parse(localStorage.getItem("buy-list")) || [];
var addBkm = JSON.parse(localStorage.getItem("bookmark-list")) || [];
var Cnt = localStorage.getItem("cnt");

document.getElementById("filter").addEventListener("change",filterPty);

window.addEventListener("load", function () {
    displayMth(stLib);
    document.querySelector("#book-count").innerText = Cnt;
  });

  function displayMth(stLib){
    document.querySelector("tbody").innerHTML = "";
    stLib.map(function(elem,idx){
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
        td6.textContent = "Buy";
        td6.addEventListener("click", function () {
            addToBuy(elem);
            dlBy(idx);
          });

          var td7 = document.createElement("td");
        td7.textContent = "Add";
        td7.addEventListener("click", function () {
            addToBkm(elem);
            dlBkm(idx);
          });

          var td8 = document.createElement("td");
          td8.textContent = elem.Price;
    
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        document.querySelector("tbody").append(tr);
        
        
    })
}

function filterPty() {
    var selected = document.querySelector("#filter").value;
    var filteredList;
    if(selected == ""){
      filteredList = stLib;
    }else{
      var filteredList = stLib.filter(function (elem) {
        return elem.Category == selected;
      });
    }
    
    displayMth(filteredList)
  }


  function addToBuy(elem) {
    
    addBuy.push(elem);
    localStorage.setItem("buy-list", JSON.stringify(addBuy));
    
  }

  function dlBy(idx){
    event.target.parentNode.remove();
    stLib.splice(idx,1);
    Cnt--;
    localStorage.setItem("book-list",JSON.stringify(stLib));
    localStorage.setItem("cnt", Cnt);
    document.querySelector("#book-count").innerText = Cnt;
  }


  function addToBkm(elem) {
    
    addBuy.push(elem);
    localStorage.setItem("bookmark-list", JSON.stringify(addBuy));
    
  }

  function dlBkm(idx){
    event.target.parentNode.remove();
    stLib.splice(idx,1);
    Cnt--;
    localStorage.setItem("bookmark-list",JSON.stringify(stLib));
    localStorage.setItem("cnt", Cnt);
    document.querySelector("#book-count").innerText = Cnt;
  }

