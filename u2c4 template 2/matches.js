// write js code here corresponding to matches.html
var masaiArr=JSON.parse(localStorage.getItem("schedule"))||[]
displayData(masaiArr);
var favarr = JSON.parse(localStorage.getItem("favourites")) || [];

function handleRoleFilter() {
    var selected = document.querySelector("#filterVenue").value;

    var filteredList = masaiArr.filter(function (elem) {
      return elem.matchvenue == selected;
    });

    console.log(filteredList);
    displayData(filteredList);
  }
function displayData(data){
    document.querySelector("tbody").innerHTML = "";

   
  
   data.forEach(function(elem){
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
       td6.innerText="Add to favourite"
       td6.style.color="green"
       td6.style.cursor="pointer"
       td6.addEventListener("click",function(){
           favourite(elem)
       })
       tr.append(td1,td2,td3,td4,td5,td6)
       document.querySelector("tbody").append(tr)
       
       function favourite(elem){
           
           favarr.push(elem)
           localStorage.setItem("favourites",JSON.stringify(favarr))
       }

       
       
        
   })
}