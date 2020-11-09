console.log('Here are all the available people:', people);

$( document ).ready( readyNow );

function readyNow() {
    console.log('jquery has joined the party');
    guessWho(people);
    randomNumber();
   
}
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function guessWho(people){
    for (let i=0; i < people.length; i++){
        console.log(people[i].githubUsername);
        //append divs for each one with pic
        //$('#target').append(`<img src="https://github.com/christopher-black.png?size=250" alt="Profile image of Chris"/>`)
        let imageUrl= '<img class=picture id ="target${i}" data-person ="${people[i]name}" src="https://github.com/' 
        let imageUrlTwo = '.png?size=250"/>'
        $('#target').append(imageUrl+people[i].githubUsername+imageUrlTwo)
        
        console.log(imageUrl+people[i].githubUsername+imageUrlTwo);
       
    }
}
