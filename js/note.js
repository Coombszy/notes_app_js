function note(){
  this._MY_TEXT = "";
  this._MY_ID = 0;
}

note.prototype.setContent = function(content){
  this._MY_TEXT = content;
}

note.prototype.getSummary = function(){
  return this._MY_TEXT.substring(0,9)+"...";
}

note.prototype.setMyID= function(id){
  this._MY_ID = id;
}

note.prototype.getContent = function(){
  return this._MY_TEXT;
}

note.prototype.getID = function(){
  return this._MY_ID;
}