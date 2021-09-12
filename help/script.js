(function() {
  var i, string, update;

  i = 0;

  string = "hey kiddo <br/> fucking run from them.   <br/> very fucking fast <br/> help me please </br> <a href='http://hide.devan.cool'>-.-- --- ..- / -- --- - .... . .-. ..-. ..- -.-. -.- . .-. / -.-- --- ..- / ..-. --- ..- -. -.. / -- . --..-- / .. / -. . . -.. / .... . .-.. .--. --..-- / -.. --- -. .- - . / - --- / -- . / - --- / ..-. ..- -. -.. / -- -.-- / ..-. ..- - ..- .-. . / .- ... / .- / -- ..- ... .. -.-. .. .- -. / .- -. -.. / .--. .-. --- --. .-. .- -- -- . .-. .-.-.-</a>";

  update = function() {
    i++;
    return $('.a').html(string.substr(0, i));
  };

  setInterval(update, 70);

}).call(this);
