
window.onload = function () {

    var wekk =  document.getElementsByClassName('container2')[0];

    wekk.onclick = function (event) {
        var target = event.target;
        if (target.className == "number" && target.children.length < 2) {
                var divi4 = document.createElement('div');
                divi4.className = "modal";
                divi4.innerHTML = " <div class=\"close\" >X</div>\n" +
                    "        <h2>План тренировки</h2>\n" +
                    "        <textarea autoFocus id=\"textarea_modal\"  ></textarea>\n" +
                    "        <button id=\"button_id\" type=\"button\">Сохранить</button>"
                    target.appendChild(divi4);
                }
        if (target.tagName == "BUTTON") {
            target.parentElement.style.display = "none";
            if (target.parentNode.parentNode.children.length == 2) {
                var divi = document.createElement('div');
                divi.className = "circle";
                divi.innerHTML = "<textarea id=\"circle_textarea\">444</textarea>"
                target.parentNode.parentNode.appendChild(divi);
            }
            target.parentNode.nextElementSibling.children[0].value = target.previousElementSibling.value
        }
        if (target.className == "number" ) {
            target.children[1].style.display = "flex";
            }
        if (target.className == "circle") {
            target.previousElementSibling.style.display = "flex";
        }
        if(target.id == "circle_textarea"){
            target.parentNode.previousElementSibling.style.display = "flex";
        }
        if (target.className == "close"){
            target.parentNode.style.display = "none";
        }
    }
}

function sidebar_left() {
    if (document.getElementById('counter').innerHTML == '1'){
        document.getElementById('counter').innerHTML = '3'

        document.getElementsByClassName('wrapper_week1')[0].style.left = "1100px"
        document.getElementsByClassName('wrapper_week1')[0].style.transition = "none"

        document.getElementsByClassName('wrapper_week2')[0].style.left = "-1100px"
        document.getElementsByClassName('wrapper_week2')[0].style.transition = "left  ease-out 0.5s";

        document.getElementsByClassName('wrapper_week3')[0].style.left = "0"
        document.getElementsByClassName('wrapper_week3')[0].style.transition = "left  ease-out 0.5s";


        }
    else if(document.getElementById('counter').innerHTML == '2'){
        document.getElementById('counter').innerHTML = '1'

        document.getElementsByClassName('wrapper_week1')[0].style.left = "-1100px"
        document.getElementsByClassName('wrapper_week1')[0].style.transition = "left  ease-out 0.5s";

        document.getElementsByClassName('wrapper_week2')[0].style.left = "0px"
        document.getElementsByClassName('wrapper_week2')[0].style.transition = "left  ease-out 0.5s";

        document.getElementsByClassName('wrapper_week3')[0].style.left = "1100px"
        document.getElementsByClassName('wrapper_week3')[0].style.transition = "none"
    }
    else if(document.getElementById('counter').innerHTML == '3'){
        document.getElementById('counter').innerHTML = '2'
        document.getElementsByClassName('wrapper_week1')[0].style.left = "0px"
        document.getElementsByClassName('wrapper_week1')[0].style.transition = "left  ease-out 0.5s";

        document.getElementsByClassName('wrapper_week2')[0].style.left = "1100px"
        document.getElementsByClassName('wrapper_week2')[0].style.transition = "none"

        document.getElementsByClassName('wrapper_week3')[0].style.left = "-1100px"
        document.getElementsByClassName('wrapper_week3')[0].style.transition = "left  ease-out 0.5s";
    }
}
function sidebar_right() {
    if (document.getElementById('counter').innerHTML == '1'){
        document.getElementById('counter').innerHTML = '2'

        document.getElementsByClassName('wrapper_week1')[0].style.left = "0px"
        document.getElementsByClassName('wrapper_week1')[0].style.transition = "left  ease-out 0.5s";

        document.getElementsByClassName('wrapper_week2')[0].style.left = "1100px"
        document.getElementsByClassName('wrapper_week2')[0].style.transition = "left  ease-out 0.5s";

        document.getElementsByClassName('wrapper_week3')[0].style.left = "-1100px"
        document.getElementsByClassName('wrapper_week3')[0].style.transition = "none"
    }
    else if(document.getElementById('counter').innerHTML == '2'){
        document.getElementById('counter').innerHTML = '3'
        document.getElementsByClassName('wrapper_week1')[0].style.left = "1100px"
        document.getElementsByClassName('wrapper_week1')[0].style.transition = "left  ease-out 0.5s";

        document.getElementsByClassName('wrapper_week2')[0].style.left = "-1100px"
        document.getElementsByClassName('wrapper_week2')[0].style.transition = "none"

        document.getElementsByClassName('wrapper_week3')[0].style.left = "0px"
        document.getElementsByClassName('wrapper_week3')[0].style.transition = "left  ease-out 0.5s";
    }
    else if(document.getElementById('counter').innerHTML == '3'){
        document.getElementById('counter').innerHTML = '1'
        document.getElementsByClassName('wrapper_week1')[0].style.left = "-1100px"
        document.getElementsByClassName('wrapper_week1')[0].style.transition = "none"

        document.getElementsByClassName('wrapper_week2')[0].style.left = "0px"
        document.getElementsByClassName('wrapper_week2')[0].style.transition = "left  ease-out 0.5s";

        document.getElementsByClassName('wrapper_week3')[0].style.left = "1100px"
        document.getElementsByClassName('wrapper_week3')[0].style.transition = "left  ease-out 0.5s";
    }
}




