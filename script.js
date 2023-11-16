const btns=[1,2,3,4,5,6,7,8,9,0,"\\","C",]

btns.forEach(btn=>{
    const num=document.createElement('button')
    num.classList.add('btn')
    num.classList.add('btn3')
    num.innerHTML=btn
    document.getElementById('buttons').appendChild(num)
})

const opeartions=['+','-','*','/']

opeartions.forEach(opts=>{
    const opt=document.createElement('button')
    opt.classList.add('btn2')
    opt.classList.add('btn3')
    opt.innerHTML=opts
    document.getElementById('operations').appendChild(opt)
})

const buttons=document.querySelectorAll('button');
buttons.forEach(button => {
    const input=document.getElementById('input')
    const input2=document.getElementById('input2')
    button.addEventListener("click",()=>{
        if(button.innerHTML=="C")
        {
            input.value=""
            input2.value=""
            return
        }
        if(button.innerHTML=="="){
            
            let value=eval(input.value)
            input2.value=input.value
            input.value=value
            return
            
        }
        if(button.innerHTML=="\\"){
            input.value=input.value.slice(0,length-1)
            return
        }
        input.value+=button.innerHTML
        console.log(input.value)
    })
});

