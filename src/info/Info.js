import self from "../img/selfie.jpg"
import project1 from "../img/olympiad-homepage-screenshot.png"
import project2 from "../img/goat-rodeo-screenshot.png"
import project3 from "../img/api-weather-app-screenshot.png"
import project4 from "../img/Have-A-Laugh-screenshot.jpeg"
import project5 from "../img/note-taker-app-screenshot.png"

export let colors = ["rgb(229,9,20)", "rgb(229,9,20)"];

export const info = {
    firstName: "AARON",
    lastName: "HERNANDEZ",
    initials: "AH",
    position: "MERN Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🔥',
            text: 'passionate about what i do'
        },
        {
            emoji: '🌎',
            text: 'based in TX, USA'
        },
        {
            emoji: "💼",
            text: "looking for work"
        },
        {
            emoji: "📧",
            text: "aaronhdm@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/aaronhdm",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/aaronhdm/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],

    bio: "Hello! I'm Aaron. I learned to code at The University of Texas Austin Bootcamp. I love fishing, and I believe it's important to enjoy what you do for a living. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'node.js', 'github', 'bootstrap', 'html5', 'css', 'express.js', 'mongoDB'],
            exposedTo: ['figma']
        }
    ,
    hobbies: [
        {
            label: 'fishing',
            emoji: '🎣'
        },
        {
            label: 'hiking',
            emoji: '🥾'
        },
        {
            label: 'jogging',
            emoji: '👟'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'coding',
            emoji: '🧑🏻‍💻'
        }

    ],
    portfolio: [
        {
            title: "Project 1",
            live: "https://olympiad-game.herokuapp.com/?room=5c1a0",
            source: "https://github.com/aaronhdm/olympiad-web-game",
            image: project1
        },
        {
            title: "Project 2",
            live: "https://courtsandrevival.herokuapp.com/game",
            source: "https://github.com/aaronhdm/goat-rodeo-shooter-webgame",
            image: project2
        },
        {
            title: "Project 3",
            live: "https://aaronhdm.github.io/api-weather-app/",
            source: "https://github.com/aaronhdm/api-weather-app",
            image: project3
        },
        {
            title: "Project 4",
            live: "https://aaronhdm.github.io/Have-A-Laugh/",
            source: "https://github.com/aaronhdm/Have-A-Laugh",
            image: project4
        },
        {
            title: "Project 5",
            live: "https://note-taker-appppp.herokuapp.com/",
            source: "https://github.com/aaronhdm/note-taker-app",
            image: project5
        }
    ]
}