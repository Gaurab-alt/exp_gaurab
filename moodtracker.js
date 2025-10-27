let name = document.getElementById("input-name");
let submit = document.getElementById("submit-button");
let name_display = document.getElementById("name");
let sad_emoji = document.getElementById("sad-emoji");
let happy_emoji = document.getElementById("happy-emoji");
let amazed_emoji = document.getElementById("amazed-emoji");
let angry_emoji = document.getElementById("angry-emoji");
let cool_emoji = document.getElementById("cool-emoji");
let feel = document.getElementById("feel");
let r_submit = document.getElementById("reason-submit");
let rreason = document.getElementById("rreason");
let input_reason = document.getElementById("reasons");
let mood_save = document.getElementById("moods");
let exp = '';
let delete_button = document.getElementById("delete-button");

submit.addEventListener("click", function()
{
name_display.textContent = 'Hi ! ' + name.value;
});

sad_emoji.addEventListener("click", function()
{
feel.textContent =  ' Its okay to feel low sometimes ';
exp = 'sad';
localStorage.setItem("expression", exp);
const body = document.body;
body.style.backgroundColor = "#89cff0";
sad_emoji.style.backgroundColor = "#89cff0";
happy_emoji.style.backgroundColor = "#89cff0";
amazed_emoji.style.backgroundColor = "#89cff0";
angry_emoji.style.backgroundColor = "#89cff0";
cool_emoji.style.backgroundColor = "#89cff0";
name.style.backgroundColor = "#89cff0";
input_reason.style.backgroundColor = "#89cff0";

let sound = new Audio('sad.mp3');
sound.volume = 1;
sound.play();
})

happy_emoji.addEventListener("click", function()
{
feel.textContent = "Glad to see that smile";
exp = 'happy';
localStorage.setItem("expression", exp);
const body = document.body;
body.style.backgroundColor = "#ffd93d";
sad_emoji.style.backgroundColor = "#ffd93d";
happy_emoji.style.backgroundColor = "#ffd93d";
amazed_emoji.style.backgroundColor = "#ffd93d";
angry_emoji.style.backgroundColor = "#ffd93d";
cool_emoji.style.backgroundColor = "#ffd93d";
name.style.backgroundColor = "#ffd93d";
input_reason.style.backgroundColor = "#ffd93d";
let sound = new Audio('happy.mp3');
sound.volume = 1;
sound.play();
})
amazed_emoji.addEventListener("click", function()
{
feel.textContent ="Oh!! you are " + " Amazed";
exp = 'amazed'
localStorage.setItem("expression", exp);
const body = document.body;
body.style.backgroundColor = "#ff6ac1";
sad_emoji.style.backgroundColor = "#ff6ac1";
happy_emoji.style.backgroundColor = "#ff6ac1";
amazed_emoji.style.backgroundColor = "#ff6ac1";
angry_emoji.style.backgroundColor = "#ff6ac1";
cool_emoji.style.backgroundColor = "#ff6ac1";
name.style.backgroundColor = "#ff6ac1";
input_reason.style.backgroundColor = "#ff6ac1";
let sound = new Audio('amazed.mp3');
sound.volume = 1;
sound.play();
})
angry_emoji.addEventListener("click", function()
{
feel.textContent ="Why are you " + "Angry" + " bachha call garam??";
exp = 'angry';
localStorage.setItem("expression", exp);
const body = document.body;
body.style.backgroundColor = "#ff5c5c";
sad_emoji.style.backgroundColor = "#ff5c5c";
happy_emoji.style.backgroundColor = "#ff5c5c";
amazed_emoji.style.backgroundColor = "#ff5c5c";
angry_emoji.style.backgroundColor = "#ff5c5c";
cool_emoji.style.backgroundColor = "#ff5c5c";
name.style.backgroundColor = "#ff5c5c";
input_reason.style.backgroundColor = "#ff5c5c";
let sound = new Audio('ang.mp3');
sound.volume = 1;
sound.play();
})
cool_emoji.addEventListener("click", function()
{
feel.textContent = "You ain't " + " cool Stfu";
exp = 'cool';
localStorage.setItem("expression", exp);
const body = document.body;
body.style.backgroundColor = "#00c9a7";
sad_emoji.style.backgroundColor = "#00c9a7";
happy_emoji.style.backgroundColor = "#00c9a7";
amazed_emoji.style.backgroundColor = "#00c9a7";
angry_emoji.style.backgroundColor = "#00c9a7";
cool_emoji.style.backgroundColor = "#00c9a7";
name.style.backgroundColor = "#00c9a7";
input_reason.style.backgroundColor = "#00c9a7";
let sound = new Audio('cool.mp3');
sound.volume = 1;
sound.play();
})
r_submit.addEventListener("click", function()
{
     rreason.textContent =  "Your reason for being " + `${exp}` + ' is ' +'"' + input_reason.value +'"';
     input_reason.value = '';
});

window.addEventListener("load", function()
{
   let savedMoods = localStorage.getItem("expression");
   if(savedMoods)
   {
     mood_save.textContent = `You were feeling ${savedMoods}`;
   }
});

delete_button.addEventListener("click", function()
{
    mood_save.textContent = ''; 
})



