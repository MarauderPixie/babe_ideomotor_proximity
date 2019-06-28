// In this file you can specify the trial data for your experiment

const opts = {
    key_press: [
        {   // square right
            key1: key1,
            key2: key2,
            /* 
                assigning all 4 options seems rather clunky, but since 
                key1 and key2 are expected anyway and undefined when not assigned...
                ...I'd rather not assign at all;
                e.g. if target == "circle" & expected == "m", I know which target o assigned to which key)
            */
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
    {   // circle righty
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

trials_pract = generate_trials(8)
trials_experiment = generate_trials(8) // final number: 280
