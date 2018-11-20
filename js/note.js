function note(){
  this._MY_TEXT = "";
}

note.prototype.setContent = function(content){
  this._MY_TEXT = content;
}

note.prototype.getContent = function(){
  return this._MY_TEXT;
}