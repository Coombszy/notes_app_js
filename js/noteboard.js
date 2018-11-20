function noteBoard(){
  this._NOTE_ARRAY = new Array();
  this._MY_ID = null;
}

noteBoard.prototype.addNote = function(note){
  this._NOTE_ARRAY.push(note);
}
noteBoard.prototype.getAllNotes = function(){
  return this._NOTE_ARRAY;
}
noteBoard.prototype.isEmpty = function(){
  if (this._NOTE_ARRAY.length == 0){return true;}
  else{return false;}
}
noteBoard.prototype.nextID = function(){
  return this._NOTE_ARRAY.length;
}
noteBoard.prototype.getSpecificNoteContent = function(id){
  return this._NOTE_ARRAY[id].getContent();
}