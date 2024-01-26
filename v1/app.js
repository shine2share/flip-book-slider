var right = document.getElementsByClassName("right");
var si = right.length;
var z = 1;
function video(si) {
  let video = document.getElementById("2Play");
  if (si == 2) {
    setTimeout(function () {
      video.style.display = "block";
      video.style.zIndex = 2147483647;
      video.play();
      video.playbackRate = 2;
    }, 1000);
  } else {
    video.style.display = "none";
    video.pause();
    video.currentTime = 0;
  }
}
function turnRight() {
  if (si >= 1) {
    si--;
  } else {
    si = right.length - 1;
    function sttmot(i) {
      setTimeout(function () {
        right[i].style.zIndex = "auto";
      }, 300);
    }
    for (var i = 0; i < right.length; i++) {
      right[i].className = "right";
      sttmot(i);
      z = 1;
    }
  }
  right[si].classList.add("flip");
  z++;
  right[si].style.zIndex = z;
  video(si);
}
function turnLeft() {
  if (si < right.length) {
    si++;
  } else {
    si = 1;
    for (var i = right.length - 1; i > 0; i--) {
      right[i].classList.add("flip");
      right[i].style.zIndex = right.length + 1 - i;
    }
  }
  right[si - 1].className = "right";
  setTimeout(function () {
    right[si - 1].style.zIndex = "auto";
  }, 350);
  video(si);
}
