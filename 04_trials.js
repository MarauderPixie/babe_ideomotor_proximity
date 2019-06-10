// In this file you can specify the trial data for your experiment

const opts = {
    key_press: [
        {   // square right
            key1: "w",
            key2: "o",
            w: tg_w,
            o: tg_o,
            coding: tg_w == "square" ? "incongruent" : "congruent",
            target_obj: "square",
            target_key: tg_w == "square" ? "w" : "o",
            proximity: "close",
            picture: "images/square_close_right.png"
        },        
        {   // circle right
            key1: "w",
            key2: "o",
            w: tg_w,
            o: tg_o,
            coding: tg_w == "square" ? "congruent" : "incongruent",
            target_obj: "circle",
            target_key: tg_w == "circle" ? "w" : "o",
            proximity: "close",
            picture: "images/circle_close_right.png"
        },        
        {   // square left
            key1: "w",
            key2: "o",
            w: tg_w,
            o: tg_o,
            coding: tg_w == "square" ? "congruent" : "incongruent",
            target_obj: "square",
            target_key: tg_w == "square" ? "w" : "o",
            proximity: "close",
            picture: "images/square_close_left.png"
        },        
        {   // circle left
            key1: "w",
            key2: "o",
            w: tg_w,
            o: tg_o,
            coding: tg_w == "square" ? "incongruent" : "congruent",
            target_obj: "circle",
            target_key: tg_w == "circle" ? "w" : "o",
            proximity: "close",
            picture: "images/circle_close_left.png"
        },
        /*
        FAR CUES
        */
       {   // square right
        key1: "w",
        key2: "o",
        w: tg_w,
        o: tg_o,
        coding: tg_w == "square" ? "incongruent" : "congruent",
        target_obj: "square",
        target_key: tg_w == "square" ? "w" : "o",
        proximity: "far",
        picture: "images/square_far_right.png"
    },        
    {   // circle right
        key1: "w",
        key2: "o",
        w: tg_w,
        o: tg_o,
        coding: tg_w == "square" ? "congruent" : "incongruent",
        target_obj: "circle",
        target_key: tg_w == "circle" ? "w" : "o",
        proximity: "far",
        picture: "images/circle_far_right.png"
    },        
    {   // square left
        key1: "w",
        key2: "o",
        w: tg_w,
        o: tg_o,
        coding: tg_w == "square" ? "congruent" : "incongruent",
        target_obj: "square",
        target_key: tg_w == "square" ? "w" : "o",
        proximity: "far",
        picture: "images/square_far_left.png"
    },        
    {   // circle left
        key1: "w",
        key2: "o",
        w: tg_w,
        o: tg_o,
        coding: tg_w == "square" ? "incongruent" : "congruent",
        target_obj: "circle",
        target_key: tg_w == "circle" ? "w" : "o",
        proximity: "far",
        picture: "images/circle_far_left.png"
    }
    ]
};

/*
const demo = [
    {
        question: "Your age (in years):",
        option1: "<20",
        option2: "<25"
    },
    {
        question: "Your major hand?",
        option1: "left",
        option2: "right"
    }
];
*/

trials_pract = generate_trials(16)
trials_experiment = generate_trials(200)