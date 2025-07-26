const storage = localStorage;
const textarea = document.querySelector("textarea");

textarea.addEventListener("input", (e) => {
    const value = e.target.value;
    setNotes(value);
});

getNotes()

function getNotes() {
    const note = storage.getItem("notes");
    textarea.value = note;
}

function setNotes(value) {
    storage.setItem("notes", value);
}
