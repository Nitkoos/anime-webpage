const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".anime-card");

searchInput.addEventListener("keyup", function() {
    let value = searchInput.value.toLowerCase();

    if (value.length === 1 && /^[a-z]$/i.test(value)) {
        cards.forEach(card => {
            let name = card.querySelector("h4").textContent.toLowerCase();
            
            if (name.startsWith(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    } else {
        cards.forEach(card => card.style.display = "block"); // Show all cards if input is not a single letter
    }
});
