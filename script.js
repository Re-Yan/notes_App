const addNote = document.getElementById("addNote");
const body = document.getElementById("body");

addNote.addEventListener("click", () => {
  const textArea = document.createElement("textarea");
  // textArea.type = "text";
  textArea.classList.add("note");
  body.appendChild(textArea);
});
