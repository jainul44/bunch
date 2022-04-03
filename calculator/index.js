function display(val){
    document.getElementById('screen').value +=val;
}
function equal(){
    let a = document.getElementById('screen').value;
    let b = eval(a);
    document.getElementById('screen').value = b;
}
function flush(){
    document.getElementById('screen').value = "";
}
function backspace(){
    let c = document.getElementById('screen').value;
    let d = c.slice(0, -1);
    document.getElementById('screen').value = d;
}