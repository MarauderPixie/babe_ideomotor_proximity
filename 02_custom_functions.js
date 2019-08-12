// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here
const targets = _.shuffle(['circle', 'square']);
const target1 = targets[0];
const target2 = targets[1];

// const key_set = _.sample([["b", "m"], ["q", "p"]])
const key_set = ["b", "m"]
const key1 = key_set[0]
const key2 = key_set[1]

// Not sure if this belongs here, but I need it for my custom post_test
const customUtils = {
    fill_custom_post_test: function(config) {
        return {
            age: {
                title: babeUtils.view.setter.prop(config.age_question, "Age")
            },
            gender: {
                title: babeUtils.view.setter.prop(config.gender_question, "Gender"),
                male: babeUtils.view.setter.prop(config.gender_male, "male"),
                female: babeUtils.view.setter.prop(config.gender_female, "female"),
                other: babeUtils.view.setter.prop(config.gender_other, "other")
            },
            hand: {
                title: babeUtils.view.setter.prop(config.hand_question, "Level of Education"),
                left: babeUtils.view.setter.prop(config.left, "Left"),
                right: babeUtils.view.setter.prop(config.right, "Right"),
                both: babeUtils.view.setter.prop(config.both, "Both equally")
            },
            knl: {
                title: babeUtils.view.setter.prop(config.knl_question, "SOMETHING AWFUL"),
                opt1: babeUtils.view.setter.prop(config.knl_opt1, "There"),
                opt2: babeUtils.view.setter.prop(config.knl_opt2, "Is"),
                opt3: babeUtils.view.setter.prop(config.knl_opt3, "No"),
                opt4: babeUtils.view.setter.prop(config.knl_opt4, "Default")
            },
            part: {
                title: babeUtils.view.setter.prop(config.part_question, "Simple Yes/No Question"),
                yes: babeUtils.view.setter.prop(config.left, "Yes"),
                no: babeUtils.view.setter.prop(config.roght, "No")
            },
            comments: {
                title: babeUtils.view.setter.prop(config.comments_question, "Further Comments")
            }
        };
    }
};


/* Helper functions
*
*
*/

/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};

// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};


// Declare your helper functions here
// get list of trial thingies
generate_trials = function(n) {
    give_opts = function() {
        return opts.key_press
    }

    n_blocks = n / 8

    trials = _.times(n_blocks, give_opts)
    flat   = _.flatten(trials)
    shuffled = _.shuffle(flat)

    return shuffled
};


/* Hooks  
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }

    clearTimeout(window.timeout[0]);
    window.timeout.shift();

    /* Add timeouts to the timeoutarray
    window.timeout.push(setTimeout(function(){
         $(".babe-view-stimulus").addClass("babe-invisible");
    }, 500)); */

    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please respond more quickly!');
    }, 3750));
    next();
};

// compares the chosen answer to the value of `option1`
//
// I tried to modify this for this task but failed badly =(
check_response = function(data, next) {
    $('input[name=keyPressed]').on('change', function(e) {
        if (e.target.value === data.key_pressed) {
            $('#reminder').text('You go, gurl!');
        } else {
            $('#reminder').text('YOU FAIL!!');
            //alert('Sorry, this answer is incorrect :( The correct answer was ' + e.expected);
        }
        next();
    })
}
