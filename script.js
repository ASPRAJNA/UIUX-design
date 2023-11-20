const reactions=document.querySelectorAll('.rating')
let react="";
reactions.forEach(reaction => {
    reaction.addEventListener('click',()=>{
        removeclass()
        react=reaction.id;
        console.log(react,typeof(react))
        reaction.classList.add('ratingactive')
        
    })
    })
const send=document.getElementById('send')
const feedback=document.getElementById('container')
send.addEventListener('click',()=>{
    if (react=='' || react=="undefined"){
        window.alert("Please select one")
        return
    }
    else{
        feedback.innerHTML=`
        <span style='font-size:50px;'>&#127878;</span><br>
        Thank you for the feedback <br>Your reaction is <br>`+react; 
    }
})
function removeclass(){
    reactions.forEach(reaction=>{
        reaction.classList.remove('ratingactive')
    })
}