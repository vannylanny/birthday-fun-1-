const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');

let story = {
    start: {
        text: "You wake up on your birthday and find a mysterious letter on your desk. What do you do?",
        choices: [
            { text: "Read the letter", next: "readLetter" },
            { text: "Ignore it", next: "ignoreLetter" }
        ]
    },
    readLetter: {
        text: "The letter says you’ve been invited to a secret party. Do you want to go?",
        choices: [
            { text: "Yes, let's go!", next: "goToParty" },
            { text: "No, stay home", next: "stayHome" }
        ]
    },
    ignoreLetter: {
        text: "You ignore the letter and nothing happens. The end.",
        choices: [
            { text: "Start Over", next: "start" }
        ]
    },
    goToParty: {
        text: "You arrive at the party and see your best friend. Happy Birthday! The end.",
        choices: [
            { text: "Start Over", next: "start" }
        ]
    },
    stayHome: {
        text: "You stay home and have a relaxing day. Happy Birthday! The end.",
        choices: [
            { text: "Start Over", next: "start" }
        ]
    }
};

function startGame() {
    showStory("start");
}

function showStory(storyNode) {
    const node = story[storyNode];
    storyElement.innerHTML = node.text;
    choicesElement.innerHTML = '';
    node.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => showStory(choice.next);
        choicesElement.appendChild(button);
    });
}

startGame();
