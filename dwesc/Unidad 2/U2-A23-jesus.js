function fig1(){
    for (var x = 3, y = 1; x >= 0; x--, y += 2){
        document.write(`${'&nbsp&nbsp'.repeat(x)}${'*'.repeat(y)}<br>`);
    }
    for (var x = 1, y = 5; x <= 3; x++, y -= 2){
        document.write(`${'&nbsp&nbsp'.repeat(x)}${'*'.repeat(y)}<br>`);
    }
}
function fig2(){
    document.write(`${"&nbsp".repeat(6)}*${"&nbsp".repeat(6)}<br>`);
    for (var x = 2, y = 1; x >= 0; x--, y += 2){
        document.write(`${'&nbsp&nbsp'.repeat(x)}*${'&nbsp&nbsp'.repeat(y)}*<br>`);
    }
    for (var x = 1, y = 3; x <= 2; x++, y -= 2){
        document.write(`${'&nbsp&nbsp'.repeat(x)}*${'&nbsp&nbsp'.repeat(y)}*<br>`);
    }
    document.write(`${"&nbsp".repeat(6)}*${"&nbsp".repeat(6)}<br>`);
}