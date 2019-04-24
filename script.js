// var audio = new Audio('https://docs.google.com/uc?export=download&id=1En_ZEBOZ7WyHPUD5CctsnqktQo4YJElZ');

document.addEventListener("DOMContentLoaded", function (event) {

let ancienAudio = null
    $("a").click(function () {
        if ( ancienAudio != null){
            ancienAudio.pause()
            ancienAudio.currentTime = 0;
        }
        let id = this.id;
        let audio = document.getElementsByClassName(id)[0];
        audio.play();
        ancienAudio = audio;

    });
});
