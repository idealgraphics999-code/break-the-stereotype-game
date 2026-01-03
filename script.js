function hit(// play hit sound
document.getElementById("hitSound").play();

// start background music (only once)
const bgMusic = document.getElementById("bgMusic");
if (bgMusic.paused) {
    bgMusic.volume = 0.4; // soft sound
    bgMusic.play();
} )
 {

    card.innerHTML = "🎯 Dart Hit!";
    card.classList.add("hit");

    setTimeout(() => {
        document.body.innerHTML = `
            <div class="center-box">
                <h1>✅ Truth Revealed</h1>
                <p>${truth}</p>
                <button onclick="location.reload()">Play Again</button>
            </div>
        `;

        // Apply center alignment
        document.body.style.display = "flex";
        document.body.style.justifyContent = "center";
        document.body.style.alignItems = "center";
        document.body.style.height = "100vh";
        document.body.style.margin = "0";
    }, 2000);
}