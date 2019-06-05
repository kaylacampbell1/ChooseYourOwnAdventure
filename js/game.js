// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "Sunday night you are invited to your friend's party but you also have homework.",
            choices: [
                {
                    text: "Finish homework",
                    nextLevel: "pass",
                },

                {
                    text: "Party!",
                    nextLevel: "fun",
                },
                {
                    text: "Watch netflix",
                    nextLevel: "nice"
                }
            ]
        },

        pass: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "Congratulations you got an A!",
            choices: [
                {
                    text: "Play again",
                    nextLevel: "start",
                },
            ]
        },

        fun: {
            message: "You enjoyed your night but failed to complete your homework",
            choices: [
                {
                    text: "Copy from a friend",
                    nextLevel: "copied",
                },
               
                {
                    text: "Take the F",
                    nextLevel: "fail",
                },
            ]
        },
        
        copied: {
            message: "I'm disappointed in you, cheating is never the answer.",
            choices: [
                {
                    text: "Try again",
                    nextLevel: "start",
                },
            ]
        },
        
        nice: {
            message: "You now get to tell your friend about this wonderful show on netflix",
            choices: [
                {
                    text: "Do homework",
                    nextLevel: "tried",
                },
                {
                    text: "Go to bed",
                    nextLevel: "fail",
                },
            ]
        },
        
        fail: {
            message: "You made some pretty bad decisions today",
            choices: [
                {
                  text: "Try again",
                  nextLevel: "start",
                },
                ]
        },
        
        tried: {
            message: "You slacked off a bit but got some work done. You recieved a C on your assignment.",
            choices: [
                {
                  text: "Try again",
                  nextLevel: "start"
                },
            ]
            
        },

    }
};
