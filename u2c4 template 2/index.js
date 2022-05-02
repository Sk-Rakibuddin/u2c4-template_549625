// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",masaisubmit)
var masaiArr=JSON.parse(localStorage.getItem("schedule"))||[]
function masaisubmit(){
    event.preventDefault()
     var masaiObj = {
          matchnumber: masaiForm.matchNum.value,
          team1: masaiForm.teamA.value,
          team2: masaiForm.teamB.value,
          matchdate: masaiForm.date.value,
          matchvenue:masaiForm.venue.value,
        };
        masaiArr.push(masaiObj);
        console.log(masaiArr);
        localStorage.setItem("schedule", JSON.stringify(masaiArr));
        
       
      
}
