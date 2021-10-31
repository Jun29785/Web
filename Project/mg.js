var ran; //랜덤으로 나올 수
var count; // 시도한 횟수
function guess() {
    var num1 = document.getElementById("user").value;
    if (num1 == "") {
        alert('숫자 입력하세요!');
    }
    else if (num1 == ran) {
        var area = document.getElementById("area");
        area.innerHTML = "정답!";
    }
    else {
        if (ran > num1) {
            document.getElementById("result").value = ("UP!");
        }
        else {
            document.getElementById("result").value = ("DOWN!");
        }
    }
    document.getElementById("guesses").value = ((count++) + "번 시도");
}

function gameReset() {
    ran = Math.floor(Math.random() * 100 + 1);
    count = 1;
    document.getElementById("area").innerHTML = "";
    document.getElementById("result").value = "";
    document.getElementById("guesses").value = "";
    document.getElementById("user").value = "";
}
window.onload = function () {
    document.getElementById("resetbtn").addEventListener('click', function () {
        gameReset();
    });
    gameReset();
}