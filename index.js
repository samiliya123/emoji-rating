const stars = document.querySelectorAll(".fa-star");

const emojis = document.querySelectorAll(".far");

const colors = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);

stars.forEach((stars, index) => {
    stars.addEventListener("click", () => {
         updateRating(index)
    })
})

function updateRating(index ) {
    stars.forEach((stars, idx) => {
        if (idx < index + 1) {
            stars.classList.add("active")
        } else {
            stars.classList.remove("active")
        }
    })

    emojis.forEach((emojis) => {
        emojis.style.transform = `translateX(-${index * 50}px)`
        emojis.style.color = colors[index]
    })
}

