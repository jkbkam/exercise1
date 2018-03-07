var content = document.getElementById("content");
var button = document.getElementById("button");

button.onclick = function () {

    if (content.className === "open") {

        //shrink
        content.className = "";
        button.innerHTML = "Show more";


    }    else  {

        //hide

        content.className = "open";
        button.innerHTML = "Show less";

    }

};