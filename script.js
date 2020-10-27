// Labration 1. Simpelt prompt äventyr. 

window.onload = startGame;

let currentScene = 0;

const scenes = [
    { // 0
        description: "Du är ute i skogen och plockar bär. Helt plösligt kommer en björn mot dig. Vill du klättra upp i ett träd? ja/nej ",
        choice: ["ja", "nej"],
        nextScene: [1, 3]
    },
    { // 1
        description: "Du är nu säker uppe i trädet och björnen går iväg. Men du är för tjock för trädet så du måste hoppa. Vill du hoppa i sjön eller i en hög med löv? Svara sjön eller löv. ",
        choice: ["sjön", "löv"],
        nextScene: [2, 4]
    },
    { // 2
        description: "Du landade i sjön, men tyvärr kan du inte simma så du drunknar. Vill du prova igen? ja/nej",
        choice: ["ja", "", "nej"],
        nextScene: [0]
    },
    { // 3
        description: "Tyvärr blev björnen arg och åt upp dig. Vill du prova igen? gärna/aldrig",
        choice: ["gärna", " ", "aldrig"],
        nextScene: [0]
    },
    { // 4
        description: "Grattis du överlevde äventyret!! vill du prova igen? gärna/aldrig",
        choice: ["gärna", " ", "aldrig" ],
        nextScene: [0]
    },
]


function startGame() {
    alert("Welcome to Your Adventure! press OK to start")
    presentScene();
}

function presentScene() {
    const answer = prompt(scenes[currentScene].description)
    playerAnswer(answer);
}


function playerAnswer(answer) {
    if (answer === scenes[currentScene].choice[0]) {
            currentScene = scenes[currentScene].nextScene[0]
        }
    if (answer === scenes[currentScene].choice[1]) {
            currentScene = scenes[currentScene].nextScene[1]
        }
    if (answer === scenes[currentScene].choice[2]) {
            alert("Tack för du spelade, spela gärna snart igen!")
            return;
        }
    
   

    presentScene();
}