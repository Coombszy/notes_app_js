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
    span.innerHTML = notesDrawing();
  }
}

function notesDrawing(){
  var htmlstart = `
  <div>
    <span>
    <h2>Your Notes!</h2>
    <ul>
    <div class="list">
  `;
  var htmlbody = "";
  var htmlend = `
    </div>
    </ul>
    </span>
  </div>
  `;
  this.notes.getAllNotes().forEach(function(element) {
    htmlbody += "<li>"+element.getContent()+"</li>";
  });
return htmlstart + htmlbody + htmlend
}