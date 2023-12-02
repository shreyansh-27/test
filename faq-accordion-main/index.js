var coll = document.getElementsByClassName("collapsible");

for(var i = 0; i < coll.length; i++){
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if(content.style.display === "block"){
            content.style.display = "none";
        }else{
            content.style.display = "block";
        }
    });
}

var hulk = document.getElementById("collapsible").getElementsByClassName("imge");


function changeImage(){
    var imgElement = document.getElementsByClassName("img");   
    if(imgElement.classList.contains("minus-img")){
        imgElement.classList.add("plus");
        imgElement.classList.remove("minus-img");
    }else{
        imgElement.classList.add("minus-img");
        imgElement.classList.remove("plus");
    }
    
    console.log("sadsad");
}