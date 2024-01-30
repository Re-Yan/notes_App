const addNote = document.getElementById("addNote");
const body = document.getElementById("body");

addNote.addEventListener("click", () => {
  const textBox = document.createElement("input");
  textBox.type = "text";
  textBox.classList.add("note");
  body.appendChild(textBox);
});
