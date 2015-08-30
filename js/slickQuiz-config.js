// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "CC Trivia",
        "main":    "<p>Think you're an expert on climate change? Find out how well much you know with this fun quiz!</p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "Climate Expert",
        "level2":  "Climate Contender",
        "level3":  "Climate Amateur",
        "level4":  "Climate Noob",
        "level5":  "Stay in school, kid...",// no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What is climate change?",
            "a": [
                {"option": "How the world evolves",      "correct": false},
                {"option": "How animals move to different habitats",     "correct": false},
                {"option": "A change in global or regional weather",      "correct": true},
                {"option": "How natural disasters change the environment",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Climate change is a change in the average weather in an area!</p>",
            "incorrect": "<p><span>Uhh no.</span> Climate change is the change in an area's weather. Pay attention in science class, kids.<p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "What is the leading contributor to climate change?",
            "a": [
                {"option": "Humans",               "correct": true},
                {"option": "Deforestation",   "correct": false},
                {"option": "Methane Emissions",               "correct": false},
                {"option": "Fossil Fuels", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Sad but true.</span> We humans ruin everything.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Single True Answer
"q": "What are some effects of climate change?",
            "a": [
                {"option": "Rising sea levels",           "correct": false},
                {"option": "Extinction and unwarranted population increase of different species",                  "correct": false},
                {"option": "Degradation of the ozone layers",  "correct": false},
                {"option": "All of the above",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Yup.</span> All of the above answers are correct. Rising sea levels, extinction and unwarranted population increase of different species, degradation of the ozone layers, and much more are all signs of climate change. There are also many more.</p>",

// You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> All of the answers were correct. Rising sea levels, extinction and unwarranted population increase of different species, degradation of the ozone layers, and much more are all signs of climate change. There are also many more.</p>" // no comma here
        },
        { // Question 4
            "q": "Is climate change the same as global warming?",
            "a": [
                {"option": "Yes",    "correct": false},
                {"option": "No",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. Global warming describes the increase in the Earth's average temperature. Climate change refers to both global changes in temperature and weather events.</p>" // no comma here
        },
        { // Question 5
            "q": "Does climate change affect you?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> Climate change affects everyone all over the world all the time. It affects your environment, your quality of life, and your health.</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!? Climate change affects everyone all over the world all the time. It affects your environment, your quality of life, and your health.</p>" // no comma here
        } // no comma here
    ]
};
