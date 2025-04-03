document.addEventListener("DOMContentLoaded", function() {
    const districts = document.querySelectorAll(".district");
    const trackTitle = document.getElementById("track-title");
    const music = document.getElementById("music");

    const tracks = {
        "night-market": "Cyber Night Drive",
        "corporate-tower": "Neon Corporate Theme",
        "underground": "Basswave Underground"
    };

    districts.forEach(district => {
        district.addEventListener("click", () => {
            trackTitle.innerText = tracks[district.id];
            music.play();
        });
    });
});