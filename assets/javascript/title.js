var i=0;
setInterval(function(){
    var titles=[
"d",
"de",
"dev",
"deva",
"devan",
"deva",
"dev",
"de",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 900);
