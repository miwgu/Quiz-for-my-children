const quiz=[
 {
    question:"オスカルの大好きな色は何色？",
    answers: [
        "ピンク",
        "ふかみどり",
        "あお",
        "きみどり"
    ],
    correct:"ふかみどり"

 },
 {
    question:"ロッタの大好きな犬のぬいぐるみのなまえは？",
    answers: [
        "アリス",
        "パンコリーナ",
        "フンディス",
        "バッテン"
    ],
    correct:"フンディス"

 },{
    question:"９はあとなにをたすと１０になりますか？",
    answers: [
        "１",
        "２",
        "０",
        "３"
    ],
    correct:"１"

 },{
    question:"５はあとなにをたすと１０になりますか？",
    answers: [
        "１",
        "２",
        "５",
        "３"
    ],
    correct:"５"

 },
 {
    question:"１はあとなにをたすと１０になりますか？",
    answers: [
        "１",
        "９",
        "２",
        "８"
    ],
    correct:"９"

 },
 {
    question:"４はあとなにをたすと１０になりますか？",
    answers: [
        "４",
        "５",
        "７",
        "６"
    ],
    correct:"６"

 },
 {
    question:"８はあとなにをたすと１０になりますか？",
    answers: [
        "２",
        "３",
        "４",
        "５"
    ],
    correct:"２"

 },
 {
    question:"７はあとなにをたすと１０になりますか？",
    answers: [
        "１",
        "２",
        "０",
        "３"
    ],
    correct:"３"

 },
 {
    question:"６はあとなにをたすと１０になりますか？",
    answers: [
        "３",
        "５",
        "２",
        "４"
    ],
    correct:"４"

 },
 {
    question:"２はあとなにをたすと１０になりますか？",
    answers: [
        "７",
        "８",
        "９",
        "６"
    ],
    correct:"８"

 },
 {
    question:"１０はあとなにをたすと１０になりますか？",
    answers: [
        "１",
        "２",
        "０",
        "４"
    ],
    correct:"０"

 },
/*  {
    question:"５＋７＝",
    answers: [
        "１２",
        "１３",
        "１５",
        "１１"
    ],
    correct:"１２"

 },
 {
    question:"９＋４＝",
    answers: [
        "１２",
        "１３",
        "１７",
        "１９"
    ],
    correct:"１３"

 },
 {
    question:"３＋８＝",
    answers: [
        "１６",
        "１２",
        "１１",
        "７"
    ],
    correct:"１１"

 },
 {
    question:"６＋８＝",
    answers: [
        "１３",
        "１４",
        "１５",
        "１９"
    ],
    correct:"１４"

 },
 {
    question:"６＋７",
    answers: [
        "１０",
        "１２",
        "１３",
        "１４"
    ],
    correct:"１３"

 },
 {
    question:"５＋７＝",
    answers: [
        "１０",
        "１５",
        "１７",
        "１２"
    ],
    correct:"１２"

 },
 {
    question:"８＋８＝",
    answers: [
        "１３",
        "１１",
        "１６",
        "１５"
    ],
    correct:"１６"

 } */

];


/* const question ="オスカルの大好きな色は何色?"
const answers=[
    "ピンク",
    "ふかみどり",
    "あお",
    "きみどり"
];
const correct="ふかみどり";
 */

/* you cannot write så like java
for(let i=0; i<answer.length;i++){
document.getElementsByTagName("button")[i].textContent =answers[i];
};  */

const quizLength=quiz.length;
let quizIndex=0;
let score=0;

const $button=document.getElementsByTagName("button");
const buttonLength=$button.length;

const setQuiz = ()=>{
    //1.Contents of question
    document.getElementById("myc-question").textContent=quiz[quizIndex].question;
    //2.Contents of answers (4 alternativ)
    let i=0;
    while (i<buttonLength){
        $button[i].textContent =quiz[quizIndex].answers[i];
        i++;
    } 
};
console.log("qIndex1"+quizIndex)

setQuiz();

console.log("qIndex2"+quizIndex)


document.getElementById("judge-div").style.display="none";
const messagediv=document.getElementById("judge-div");

document.getElementById("result-contents").style.display="none";
const resultdiv=document.getElementById("result-contents");

const clickHandler= (e)=>{
    messagediv.style.display="block";
    //use event object-> $button[0]->e.target
    if(quiz[quizIndex-1].correct===e.target.textContent){
        document.getElementById("message").textContent="正解💗";
        document.getElementById("message-2").style.display="none"
        //window.alert("正解💗")
        //message.style.display="block";
        score++;
     }else{
        document.getElementById("message").textContent="不正解💀";
        document.getElementById("message-2").style.display="block"
        document.getElementById("message-2").textContent="正しい回答は\""+quiz[quizIndex-1].correct+"\"です。";
        //window.alert("不正解💀")
        //message.style.display="block";
     }

     // when you click a button all button become disbled
     let k=0
     while(k<buttonLength){
        $button[k].disabled=true;
        k++;
     }    
};


//All buttons have clickHandler
let j=0;
while(j<buttonLength){
    $button[j].addEventListener("click", (e)=>{
        clickHandler(e);
       });
       j++;
}

const nextQuiz= ()=>{

    document.getElementById("progress").textContent=quizIndex+1+"/"+quizLength;

    // when you click "次へ" button all button become abled
    let l=0
    while(l<buttonLength){
       $button[l].disabled=false;
       l++;
    }
    // how meny quizzes you did< The total number of quizzes
   if(quizIndex<quizLength){
       //If you have quizzes left
       setQuiz();
   } else{
       // you do not have quizzes anymore
       document.getElementById("main-contents").style.display="none";
       resultdiv.style.display="block";
       if(score===quizLength){
        document.getElementById("result").textContent="おめでとう❣";
        document.getElementById("result-2").textContent=score+"問、全て正解なので100点です❣よくがんばったね✨";
       }else{
        document.getElementById("result").textContent="終了です。";
        document.getElementById("result-2").textContent="あなたの正解数は "+score+"/"+quizLength+" よくがんばったね✨";
       }
    }
    document.getElementById("judge-div").style.display="none"
    quizIndex++;// go to the next quiz
    console.log("quizIndex_buttoncheck: "+quizIndex)
    if (quizIndex===quizLength){
        document.querySelector("input").value="終了"
        console.log("c1:"+ document.querySelector('input').value)
    }else{
        document.querySelector("input").value="次へ"
        console.log("c2:"+document.querySelector("input").value)
    }
}

nextQuiz();



