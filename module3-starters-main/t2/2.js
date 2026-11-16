const i = document.createElement("li")
i.textContent = "First item"
document.getElementById("target").appendChild(i)
i.classList.add("my-item")

const i1 = document.createElement("li")
i1.textContent = "Second item"
i1.classList.add("my-list")
document.getElementById("target").appendChild(i1)

const i2 = document.createElement("li")
i2.textContent = "Third item"
document.getElementById("target").appendChild(i2)