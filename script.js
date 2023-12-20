const datas=[
    {
        bev:"Latte",
        cost:35
    },
    {
        bev:"Tea",
        cost:15
    },
    {
        bev:"Horlics",
        cost:25
    },
    {
        bev:"Green Tea",
        cost:10
    }
]


datas.forEach(data=>{
    const div = document.createElement('div');
    
    const input2=document.createElement('input');
    const input1=document.createElement('input');
    const name=document.createElement('h3');
    const price=document.createElement('p');
    input2.type="checkbox"
    input2.id=data.cost
    div.classList="item";
    input2.classList="check"
    name.classList="listitems"
    price.classList="listitems symbol"
    input1.classList="Quantity listitems";
    name.innerHTML=data.bev;
    input1.type="number";
    input1.value=1
    input1.max=10;
    input1.min=1;
    price.innerHTML=data.cost;
    div.appendChild(input2)
    div.appendChild(name);
    div.appendChild(price);
    div.appendChild(input1);
    document.getElementById('items').appendChild(div)
})

const submit = document.getElementById('submit');
var total=0;
var text =""
text="<h1 style='text-align:center;color:brown;'>Beverages Refreshment</h1><br><br>"
function calcuatetotal(){
    
    const checkbtns=document.querySelectorAll('.check')
    var i=0;
    const Quant=document.querySelectorAll('.Quantity')
    a=[]
    for (i = 0; i < Quant.length; i++) {
        a[i]=Quant[i].value ;
      }
      console.log(a);
      var i=0;
        checkbtns.forEach(checkbtn=>{
            if(checkbtn.checked){
                selected=checkbtn.id;
                console.log(selected,a[i],datas[i].bev);
                text=text+"<h3 class='print1'> <span>      "+datas[i].bev+"       </span><span>      "+selected+
                "</span><span>       "+a[i]+"       </span><span>       "+selected*a[i]+"</span></h3> ";
                total=total+selected*a[i];
                console.log(total);
               // console.log(selected,checkbtns,i);
            }
            i++;

           
        })
}

submit.addEventListener('click',()=>{
    total =0;
    text=text+"<h3 class='print1'> <span> Item </span><span> Quantity </span><span> Price </span><span> Total </h3> " ;
    console.log('clicked')
    calcuatetotal();
    console.log(total);
    var mywindow = window.open("", "PRINT", "height=600,width=600");
    text=text+"<br>-----------------------------------------<br><h2>TOTAL :              "+total+"</h2>"
    mywindow.document.write(text);
    mywindow.document.close();
    mywindow.focus();
    mywindow.print();
    return true;
})