// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = babeViews.view_generator("intro",{
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `Thank you for participating in our experiment!
            <br />
            <br />
            It will take about <b>8 minutes</b> to complete. 
            <br />
            <br />
            Please make sure you will not be distracted for that duration.
            <br />
            <strong>This is very important!</strong>
            <br />
            <br />
            <b>PLEASE ALSO NOTE:</b>
            <br />
            By proceeding to the next step, you <b>agree to your data being analyzed</b>. All collected data will be completely anonymized.
            You can also abort the experiment at <b>any time</b> by closing this tab/window - no data will be submitted in that case.
            <br />
            <br />
            When you think you are ready, please proceed to the instructions.`,
   buttonText: 'To the instructions'    
});

// For most tasks, you need instructions views
const instructions = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instrucions',
    title: 'General Instructions',
    text:  `In this experiment you will repeatedly be presented with two kinds of symbols: 
            either a <strong>square</strong> or a <strong>circle</strong>. 
            <br />
            First you will see a cross in the middle of the screen. 
            Afterwards you will see the symbol, each time appearing in a different position on the screen. 
            <strong>Please focus your attention on the cross!</strong> 
            <br />
            Your task is to press a key depending on which symbol you see: 
            <br />
            <br />
            press <strong>${key1}</strong> for <strong>${target1}</strong>
            <br />
            press <strong>${key2 == "p" ? "+" : key2}</strong> for <strong>${target2}</strong>
            <br />
            <br />
            Please try to answer as fast as possible!
            <br />
            <br />
            Before we start with the actual experiment you will now run through a short practice round to 
            familiarize yourself with the setup.`,
    buttonText: 'Start practice'
});

const begin_prompt = babeViews.view_generator("begin",{
    trials: 1,
	name: 'begin_prompt',
	title: 'Start with the experiment',
    text: `<b>Very good!</b> 
           <br>
           The next part will be the actual experiment. Please memorize the key assignment it:           
           <br><br>
           <strong>${key1}:</strong> ${target1}
           <br />
           <strong>${key2 == "p" ? "+" : key2}:</strong> ${target2}
           <br><br>
           Remember to answer as <b>fast</b> and as <b>accurate</b> as possible.`,
	buttonText: "Let's go!"
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator("post_test",{
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: `<strong>Great, your almost done!</strong>
           <br>
           Answering the following questions is optional, but your answers will help us analyze our results.`,

    hand_question: "Which is your main hand?",

    knl_question: "Do you know the Simon Task and/or Common Coding Theory?",
    knl_opt1: "Yes - Simon Effect",
    knl_opt2: "Yes - Common Coding Theory",
    knl_opt3: "Yes - both",
    knl_opt4: "No, neither",

    part_question: "Have you participated in a similar experiment before?",
    
    buttonText: "Finish & Submit Data"
}, {
    answer_container_generator: custom_answers.post_test,
    handle_response_function: custom_response_handling.post_test
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator("thanks", {
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!<br /><br />You really earned yourself a cup of coffee.',
    prolificConfirmText: 'Press the button'
});

// trial (babe's Trial Type Views) below


// Here, we initialize a normal forced_choice view
const practice = babeViews.view_generator('key_press', {
    trials: trials_pract.length,
    name: 'practice',
    data: trials_pract,
    pause: Math.floor(Math.random()*(1000)+1000),
    fix_duration: Math.floor(Math.random()*(50)+200),
    // hook: {after_response_enabled: time_limit},
}, {
    stimulus_container_generator: custom_stimuli.key_press
});

const experiment = babeViews.view_generator('key_press', {
    trials: trials_experiment.length,
    name: 'experiment',
    data: trials_experiment,
    pause: Math.floor(Math.random()*(1000)+1000),
    fix_duration: Math.floor(Math.random()*(50)+200),
    // hook: {after_response_enabled: time_limit},
}, {
    stimulus_container_generator: custom_stimuli.key_press
});
