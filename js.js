var n=prompt("enter your name")
var b=prompt("enter the math mark")
var c="";
if(b>=30 && b<=40){
    c="F";
}
else if(b>=40 && b<=50){
    c="E";
}
else if(b>=50 && b<=60){
    c="D";
}
else if(b>=60 && b<=70){
    c="C";
}
else if(b>=70 && b<=80){
    c="B";
}
else if(b>=80 && b<=90){
    c="A"
}
else if(b>=90 && b<=100){
    c="A+";
}
 

 var v=prompt("enter your name")
 var d=prompt("enter the english mark")
 var e="";
 if(d>=30 && d<=40){
     e="F";
 }
 else if(d>=40 && d<=50){
     e="E";
 }
 else if(d>=50 && d<=60){
     e="D";
 }
 else if(d>=60 && d<=70){
     e="C";
 }
 else if(d>=70 && d<=80){
     e="B";
 }
 else if(d>=80 && d<=90){
     e="A"
 }
 else if(d>=90 && d<=100){
     e="A+";
 }




 var x=prompt("enter your name")
 var f=prompt("enter the urdu mark")
 var g="";
 if(f>=30 && f<=40){
     g="F";
 }
 else if(f>=40 && f<=50){
     g="E";
 }
 else if(f>=50 && f<=60){
     g="D";
 }
 else if(f>=60 && f<=70){
     g="C";
 }
 else if(f>=70 && f<=80){
     g="B";
 }
 else if(f>=80 && f<=90){
     g="A"
 }
 else if(f>=90 && f<=100){
     g="A+";
 }



 var z=prompt("enter your name")
 var h=prompt("enter the urdu mark")
 var j="";
 if(h>=30 && h<=40){
     j="F";
 }
 else if(h>=40 && h<=50){
     j="E";
 }
 else if(h>=50 && h<=60){
     j="D";
 }
 else if(h>=60 && h<=70){
     j="C";
 }
 else if(h>=70 && h<=80){
     j="B";
 }
 else if(h>=80 && h<=90){
     j="A"
 }
 else if(h>=90 && h<=100){
     j="A+";
 }

 document.write(`<table border=1 cellpadding=40><tr><th>Name</th><th>subject</th><th>mark</th><th>grade</th></tr><tr><td>${n}</td><td>math</td><td>${b}</td>><td>${c}</td>></tr><tr><td>${v}</td><td>english</td><td>${d}</td><td>${e}</td></tr><tr><td>${x}</td><td>urdu</td><td>${f}</td><td>${g}</td></tr><tr><td>${z}</td><td>pak studies</td><td>${h}</td><td>${j}</td></tr></table>`)
