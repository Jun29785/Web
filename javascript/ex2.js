var start_dan = parseInt(prompt("몇단부터 출력하시겠습니까?"));
var end_dan = parseInt(prompt("몇단까지 출력하시겠습니까?"));
var i,j;

for (i=start_dan;i<=end_dan;i++){
    document.write("<div>");
    document.write("<h2>"+i+"단</h2>");
    for(j=1;j<10;j++){
        document.write(i+" X "+j+" = "+i*j+"<br>");
    }
    document.write("</div>");
}