var result = randomRange(1, 10);
var tries = 3;
var spin = document.getElementById("spin");
var input;
var ended = false;

spin.onclick = function(){
    if (tries > 0 && !ended){
        if (document.getElementById("box").value == ""){
            document.getElementById("status").innerHTML = "Bạn chưa nhập số!";
        } else {
            input = parseInt(document.getElementById("box").value, 10);
            if (input == result){
                document.getElementById("status").innerHTML = "Bạn đã đoán đúng!";
                document.getElementById("spin").innerText = "Thử lại."
                ended = true;
            } else {
                if (tries > 1){
                    document.getElementById("status").innerHTML = "Bạn đã đoán sai!";
                } else {
                    document.getElementById("status").innerHTML = "Bạn đã hết lượt. Kết quả đúng là " + result + ".";
                    document.getElementById("spin").innerText = "Thử lại."
                    ended = true;
                }
            }

            document.getElementById("box").value = "";
            tries--;
            document.getElementById("tries").innerHTML = "Bạn còn " + tries + " lần đoán.";
        }
    }
    else {
        location.reload();
    }
}

function randomRange(min, max){
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}