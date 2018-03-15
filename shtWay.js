
function ide(id){
  return document.getElementById(id);
}
function ce(el){
  return document.createElement(el);
}
function txt(tx){
  return document.createTextNode(tx);
}

Object.prototype.tag = function(tag){
  if(this.window){
    return document.getElementsByTagName(tag);
  }
  else{
    return this.getElementsByTagName(tag);
  }
};

HTMLElement.prototype.atr=function(atts){
  obj = Object.keys(atts);
  for(i=0; i < obj.length; i++){
    pos = obj[i];
    this.setAttribute(pos, atts[pos]);
  }
};

HTMLElement.prototype.sty = function(css){
  obj = Object.keys(css);
  for(i=0; i < obj.length; i++){
    pos = obj[i];
    eval("this.style." + pos + "=" + "'" + css[pos] + "'");
  }
};

HTMLElement.prototype.ape=function(obj){
  this.appendChild(obj);
};
