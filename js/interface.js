function onLoad(){
  this.notes = new noteBoard();
  updatePage();
}

function newNote(){
  var newNote = new note();
  var noteContent = document.getElementById("noteInput").value;
  newNote.setContent(noteContent);
  newNote.setMyID(notes.nextID());
  notes.addNote(newNote);
  updatePage();
}

function updatePage(){
  if (this.notes.isEmpty() == false)
  {
    var span = document.getElementById("SP2")
    span.innerHTML = notesDrawing();
  }
}

function showNote(noteID){
  var content = document.getElementById("content");
  content.innerHTML = `<h2>View a Note</h2>
    <p>Note Content:</p>
    <p>`+notes.getSpecificNoteContent(noteID)+`</p>
    <span onclick="updatePage()" class="point">Go back!</span>`;
}

function notesDrawing(){
  var htmlstart = `
  <div>
    <span id="content">
    <h2>Your Notes!</h2>
    <ul id="list">
    <div class="list">
  `;
  var htmlbody = "";
  var htmlend = `
    </div>
    </ul>
    </span>
  </div>
  `;
  this.notes.getAllNotes().forEach(function(note) {
    htmlbody += "<li onclick='showNote("+note.getID()+")'>"+note.getSummary()+"</li>";
  });
return htmlstart + htmlbody + htmlend
}