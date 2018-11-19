function onLoad(){
  this.notes = new noteBoard();
  updatePage();
}

function newNote(){
  var newNote = new note();
  var noteContent = document.getElementById("noteInput").value;
  newNote.setContent(noteContent);
  notes.addNote(newNote);
  updatePage();
}

function updatePage(){
  if (this.notes.isEmpty() == false)
  {
    var span = document.getElementById("SP2")
    span.innerHTML = "<p>AA</p>";
  }
  console.log(this.notes);
}

function notesDrawing(){
  var html = `
  <div>
    <span>Some HTML here</span>
  </div>
`;
return html
}