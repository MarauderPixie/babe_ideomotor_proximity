// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here
const key_targets = _.shuffle(['circle', 'square']);
const tg_x = key_targets[0];
const tg_m = key_targets[1];


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
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Your answer is correct! Yey!');
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
}


/* doesn't work =(
correctness = function(data, next) {
    $('input[name=key_pressed]').on('change', function(e) {
        let correctness

        if (
            data.target_key ===
            e.target.value
        ) {
            correctness = "correct";
        } else {
            correctness = "incorrect";
        }
        next();
    })
}
*/



// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/
