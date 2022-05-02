// write js code here corresponding to favourites.html
var favarr = JSON.parse(localStorage.getItem("favourites")) || [];
displayData(favarr);
function displayData(data){
    document.querySelector("tbody").innerHTML = "";

   
  
   data.forEach(function(elem,index){
       var tr=document.createElement("tr")
       var td1 = document.createElement("td");
       td1.innerText = elem.matchnumber;

       var td2 = document.createElement("td");
       td2.innerText = elem.team1;

       var td3 = document.createElement("td");
       td3.innerText = elem.team2;

       var td4 = document.createElement("td");
       td4.innerText = elem.matchdate;

       var td5 = document.createElement("td");
       td5.innerText = elem.matchvenue;
       var td6 = document.createElement("td");
       td6.innerText="Delete"
       td6.style.color="red"
       td6.style.cursor="pointer"
       td6.addEventListener("click",function(){
           deleteitem(elem,index)
       })
       tr.append(td1,td2,td3,td4,td5,td6)
       document.querySelector("tbody").append(tr)

 })
}
function deleteitem(elem,index){
    favarr.splice(index,1)
    localStorage.setItem("favourites", JSON.stringify(favarr));
      window.location.reload();
}