document.addEventListener("DOMContentLoaded", function () {
    const audios = document.querySelectorAll("audio");
    const cards = document.querySelectorAll(".card");

    // Pause all other audios when one plays
    audios.forEach(audio => {
        audio.addEventListener("play", function () {
            audios.forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                }
            });
        });
    });

    // Play audio when hovering over a card
    cards.forEach(card => {
        const audioId = card.dataset.audio; // get linked audio ID
        const audio = document.getElementById(audioId);

        if (!audio) return;

        card.addEventListener("mouseenter", function () {
            audios.forEach(a => a.pause()); // pause all
            audio.currentTime = 0;
            audio.play();
        });

        card.addEventListener("mouseleave", function () {
            audio.pause();
        });
    });
});
