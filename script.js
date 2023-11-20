const text1=document.getElementById('text')
const speed= document.getElementById('speed')
const text="We love programming!!!..."
let idx=1;
let speedval= 300/speed.value

writeText()
function writeText(){
    text1.innerHTML=text.slice(0,idx)
    idx++

    if(idx>text.length){
        idx=1
    }
    setTimeout(writeText,speedval)
}

speed.addEventListener('input', (e) => speed = 300 / e.target.value)