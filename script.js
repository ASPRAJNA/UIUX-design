const data=[
    {
            question: "Which language runs in a web browser?",
            a: "Java",
            b: "C",
            c: "Python",
            d: "JavaScript",
            correct: "d",
        },
        {
            question: "What does CSS stand for?",
            a: "Central Style Sheets",
            b: "Cascading Style Sheets",
            c: "Cascading Simple Sheets",
            d: "Cars SUVs Sailboats",
            correct: "b",
        },
        {
            question: "What does HTML stand for?",
            a: "Hypertext Markup Language",
            b: "Hypertext Markdown Language",
            c: "Hyperloop Machine Language",
            d: "Helicopters Terminals Motorboats Lamborginis",
            correct: "a",
        },
        {
            question: "What year was JavaScript launched?",
            a: "1996",
            b: "1995",
            c: "1994",
            d: "none of the above",
            correct: "b",
        },
    ]
    
    const quiz=document.getElementById('quiz')
    const answers=document.querySelectorAll('.answer')
    const question=document.getElementById('question')
    const a=document.getElementById('a_text')
    const b=document.getElementById('b_text')
    const c=document.getElementById('c_text')
    const d=document.getElementById('d_text')
    const submit=document.getElementById('submit')
    
    let currentquiz=0;
    let score=0
    
    loadQuiz()
    
    function loadQuiz(){
        deselectAnsewers()
    
        const currentData=data[currentquiz]
        question.innerText=currentData.question
        a.innerText=currentData.a
        b.innerText=currentData.b
        c.innerText=currentData.c
        d.innerText=currentData.d
    
    }
    
    function deselectAnsewers(){
        answers.forEach(answer=>answer.checked=false)
    }
    
    function getSelected(){
        let selected
        answers.forEach(answer=>{
            if(answer.checked){
                selected=answer.id
            }
        })
        return selected
    }
    
    submit.addEventListener('click',()=>{
        console.log('clicked')
        const answer=getSelected()
        
        if(answer){
            if(answer==data[currentquiz].correct){
                score++
            }
            currentquiz++
            if(currentquiz<data.length){
                loadQuiz()
            }
            else{
               quiz.innerHTML=
               `<h2> You Answered ${score}/${data.length} questions correct</h2> 
               <button onclick="location.reload()">Relaod</button> `
            }
        }
    })