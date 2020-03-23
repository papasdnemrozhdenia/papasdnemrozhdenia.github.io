window.onload = function() {
    var photo =1;
    var butt = document.getElementById("butt2");
    var butt2 = document.getElementById("butt1");
    var photka = document.getElementById("photo");
    butt.onmousedown = function() {
        butt.style.width = "160px";
        butt.style.height = "160px";
        butt.style.left = "1190px";
        butt.style.top = "440px";
     }
    butt.onmouseup = function() {
        butt.style.width = "180px";
        butt.style.height = "180px";
        butt.style.left = "1180px";
        butt.style.top = "430px";
     }
    butt.onclick = function() {
        if (photo<4){
            photo++;
            if (photo==2){
               photka.src = "photo-2.png";
            }
            if (photo==3){
                photka.src = "photo-3.png";
             }
            if (photo==4){
                photka.src = "photo-1.png";
             }
        }
        else {
            photo=1;
            photka.src = "photo-4.png";
        }
    }    
    butt2.onmousedown = function() {
        butt2.style.width = "160px";
        butt2.style.height = "160px";
        butt2.style.left = "230px";
        butt2.style.top = "440px";
     }
    butt2.onmouseup = function() {
        butt2.style.width = "180px";
        butt2.style.height = "180px";
        butt2.style.left = "220px";
        butt2.style.top = "430px";
     }
    butt2.onclick = function() {
        if (photo>1){
            photo--;
            if (photo==2){
               photka.src = "photo-2.png";
            }
            if (photo==3){
                photka.src = "photo-3.png";
             }
            if (photo==4){
                photka.src = "photo-1.png";
             }
        }
        else {
            photo=5;
            photka.src = "photo-4.png";
        }
    }
};