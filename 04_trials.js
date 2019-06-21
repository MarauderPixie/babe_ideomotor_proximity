// In this file you can specify the trial data for your experiment

const opts = {
    // GENREL THOUGHT:
    // it seems I need a "expected" variable in every condition
    // which is being checked for correctness (so I don't have to do it in R)
    // OR I could (maybe?) change that in babe.js
    key_press: [
        {   // square right
            key1: key1,
            key2: key2,
            target: "square",
            expected: target1 == "square" ? key2 : key1,
            picture: "images/square_close_right.png"
        },
        {   // circle right
            key1: key1,
            key2: key2,
            target: "circle",
            expected: target1 == "circle" ? key2 : key1,
            picture: "images/circle_close_right.png"
        },
        {   // square left
            key1: key1,
            key2: key2,
            target: "square",
            expected: target1 == "square" ? key1 : key2,
            picture: "images/square_close_left.png"
        },
        {   // circle left
            key1: key1,
            key2: key2,
            target: "circle",
            expected: target1 == "circle" ? key1 : key2,
            picture: "images/circle_close_left.png"
        },
        /*
        FAR CUES
        */
       {   // square right
        key1: key1,
        key2: key2,
        target: "square", 
        expected: target1 == "square" ? key2 : key1,
        picture: "images/square_far_right.png"
    },        
    {   // circle right
        key1: key1,
        key2: key2,
        target: "circle",
        expected: target1 == "circle" ? key2 : key1,
        picture: "images/circle_far_right.png"
    },        
    {   // square left
        key1: key1,
        key2: key2,
        target: "square",
        expected: target1 == "square" ? key1 : key2,
        picture: "images/square_far_left.png"
    },        
    {   // circle left
        key1: key1,
        key2: key2,
        target: "circle",
        expected: target1 == "circle" ? key1 : key2,
        picture: "images/circle_far_left.png"
    }
    ]
};

/*
const demo = [
    {
        question: "Your age (in years):",
        option1: "<20",
</strong>    }
        option2: "<25"
    },
    {
        question: "Your major hand?",
</strong>    }
        option1: "left",
        option2: "right"
    }
];
*/

trials_pract = generate_trials(24)
trials_experiment = generate_trials(200)