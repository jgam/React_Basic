var data = "{}";

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.ret_response = 'a';
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(typeof(this.responseText));
    this.ret_response = this.responseText;
    console.log(this.ret_response)
  }
});



console.log('*************')
//console.log(xhr)
console.log('*****************');
xhr.open("GET", "https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=b8ea99bee79793ee5cbdb7caf126e4ea");
xhr.send(data)


console.log(xhr.readyState);
console.log('hereee')

console.log(data)
console.log('hey hey this :::***************',xhr.responseText.page);
console.log(xhr.ret_response)
console.log(xhr)