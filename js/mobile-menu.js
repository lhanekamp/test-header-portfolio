
 
var showing = false;
document.querySelector("#dropbtn").addEventListener("click", dropDown);

function dropDown() { 
    if (showing == false) {
        document.getElementById("myDropdown").classList.add("show");
        showing = true
    } else {
        document.getElementById("myDropdown").classList.remove("show");
        showing = false
    }
   

}
