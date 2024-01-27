const addNote = document.getElementById("addNote");
const body = document.getElementById("body");

addNote.addEventListener("click", () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("note");
  body.appendChild(newDiv);
});
