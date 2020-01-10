
var someData = [
    {name: "Tomatoes", productDescription : "Fresh Organic Red Tomatoes ", Unitprice: 3,Quantity:1},
    {name: "Banana", productDescription : "Original Banana  ", Unitprice: 4,Quantity:1},
    {name: "Cake", productDescription : " chocolate with little vanilla ", Unitprice: 10,Quantity:1}
 ];

var sum =0 ;

var tomatoes = document.getElementById("tomatoes");
var banana = document.getElementById("banana");
var cake = document.getElementById("cake");
var sumref = document.getElementById("totalSum");
var table = document.getElementById("table_shopping").getElementsByTagName('tbody')[0];

initializeElement();

function initializeElement(){

}

tomatoes.addEventListener("click",function(){
 addRow(this.textContent)
})
banana.addEventListener("click",function(){
 addRow(this.textContent)
})
cake.addEventListener("click",function(){
 addRow(this.textContent)
})

function addRow( element) {

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    for( var i=0 ; i < someData.length;i++){

    if(someData[i].name == element ) {
    
    cell1.innerHTML =someData[i].name ;
    cell2.innerHTML = someData[i].productDescription;
    cell3.innerHTML = someData[i].Unitprice;
    cell4.innerHTML = someData[i].Quantity;
    sum+=someData[i].Unitprice;;
    sumref.textContent = sum;
    }
}

}
