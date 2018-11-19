function noteBoard(){
  this._NOTE_ARRAY = new Array();
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