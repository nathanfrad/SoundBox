document.addEventListener("DOMContentLoaded", function (event) {

    let ancienAudio = null

    var buttons = document.getElementsByTagName("a")

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = playSound;
    }

    function playSound() {
        if (ancienAudio != null) {
            ancienAudio.pause()
            ancienAudio.currentTime = 0;
        }
        let id = this.id;
        let audio = document.getElementsByClassName(id)[0];
        if (id === "goal") {
            audio.volume = 0.5;
        }
        audio.play();
        ancienAudio = audio;
    };

});