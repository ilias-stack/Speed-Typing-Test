//part1__________(random text)________________________________________________________________________________________
function random_quote_gen(){
    let quote=['L université Cadi Ayyad de Marrakech est une université publique fédérant les établissements d enseignement supérieur de Marrakech, El Kelaâ des Sraghna, Essaouira et Safi. Elle est classée par le Times Higher Education1 parmi les 100 meilleures universités au monde ayant moins de 50 ans d existence. Elle est classée par le U.S. News & World Report au 23e rang dans le classement régional','Javascript is a high level programming language mostly used in frontend Dev','This language is without a doubt one of the most known and used PL in the world and it is not that hard to learn',
'La science des données est un domaine interdisciplinaire qui utilise des méthodes, des processus, des algorithmes et des systèmes scientifiques pour extraire des connaissances et des idées de nombreuses données structurelles et non structurées. Elle est souvent associée aux Big Data et à l analyse des données',
'HTML(Hyper Text Markup Language) is not a programming language it is considered to be just a text format language for web texts','Python est un langage de programmation interprété, multi-paradigme et multiplateformes. Il favorise la programmation impérative structurée, fonctionnelle et orientée objet.','Java est une technique informatique développée initialement par Sun Microsystems puis acquise par Oracle suite au rachat de lentreprise. Défini à lorigine comme un langage de programmation, Java a évolué pour devenir un ensemble cohérent déléments techniques et non techniques.'];
    let i=Math.floor(Math.random()*quote.length);
    let text=document.getElementById("to-copy");
    text.innerHTML=quote[i];
    return quote[i];
}
let one=1;
let interval;

let a=random_quote_gen();
var taper=a.split('');
const btn=document.getElementById('start');
let i=document.getElementById('type').value.length;

const typing=document.getElementById('type');
const border=document.getElementById('border');


typing.addEventListener('keypress',function(event){
    if (one==1){
        interval=setInterval(chrono,10);
        one=0;
    }
    i=document.getElementById('type').value.length;

    if(event.key==taper[i]){
        border.style.border='8px solid green';
        i=(document.getElementById('type').value.length)+1;
    }
    else{
        border.style.border='8px solid orange';
    }
})
setInterval(textverifier,10);
//part2__________(chrono)________________________________________________________________________________________________
let millis=0;
let seconds=0;
let minutes=0;
function chrono(){
    millis++;
    if(millis<10){
        millis='0'+millis;
    }
    else if(millis>=100){
        millis=0;
        seconds++;
        if(seconds<10){
            seconds='0'+seconds
        }
        if(seconds>=60){
            seconds=0;
            minutes++;
            if(minutes<10){
                minutes='0'+minutes;
            }
        }
    }
    document.getElementById("chrono").innerHTML=minutes+':'+seconds+':'+millis;
};
btn.addEventListener('click',function(){
    a=random_quote_gen();
    taper=a.split('')
    typing.value='';
    i=0;
    one=1;
    clearInterval(interval);millis=0;minutes=0;seconds=0;
    document.getElementById("chrono").innerHTML="00:00:00"
    border.style.border='8px solid grey';
})

function textverifier(){
    if(document.getElementById('type').value===a){
        clearInterval(interval);
        border.style.border='8px solid green';
    }
}
typing.addEventListener('click',function(){
    border.style.border='8px solid rgba(39, 25, 238, 0.5)';
});
