// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the babe-object as input
// and has to call babe.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call babe.trial_data.push(trial_data) to save the trial information

const custom_stimuli = {
    key_press: function(config, CT) {
        return `<div class="babe-view">
                    <h1 class='babe-view-title'>${config.title}</h1>
                    <p class='babe-response-keypress-header'>
                    
                    <div class='babe-view-stimulus-container'>
                        <div class='babe-view-stimulus babe-nodisplay'></div>
                    </div>
                    <p class='babe-response-keypress-footer' id = 'reminder'></p>
                    <p class='babe-response-keypress-footer' id = 'key_assignment'></p>
                </div>`;
    },
}

const custom_answers = {
    post_test: function(config, CT) {
        const quest = customUtils.fill_custom_post_test(config);
        return `<form>
                    <p class='babe-view-text'>
                        <label for="age">${quest.age.title}:</label>
                        <input type="number" name="age" min="18" max="110" id="age" />
                    </p>
                    <p class='babe-view-text'>
                        <label for="gender">${quest.gender.title}:</label>
                        <select id="gender" name="gender">
                            <option></option>
                            <option value="${quest.gender.male}">${quest.gender.male}</option>
                            <option value="${quest.gender.female}">${quest.gender.female}</option>
                            <option value="${quest.gender.other}">${quest.gender.other}</option>
                        </select>
                    </p>
                    <p class='babe-view-text'>
                        <label for="handedness">${quest.hand.title}:</label>
                        <select id="handedness" name="handedness">
                            <option></option>
                            <option value="${quest.hand.left}">${quest.hand.left}</option>
                            <option value="${quest.hand.right}">${quest.hand.right}</option>
                            <option value="${quest.hand.both}">${quest.hand.both}</option>
                        </select>
                    </p>
                    <p class='babe-view-text'>
                        <label for="knowledge">${quest.knl.title}:</label>
                        <select id="knowledge" name="knl">
                            <option></option>
                            <option value="${quest.knl.opt1}">${quest.knl.opt1}</option>
                            <option value="${quest.knl.opt2}">${quest.knl.opt2}</option>
                            <option value="${quest.knl.opt3}">${quest.knl.opt3}</option>
                            <option value="${quest.knl.opt4}">${quest.knl.opt4}</option>
                        </select>
                    </p>
                    <p class='babe-view-text'>
                        <label for="participation">${quest.part.title}:</label>
                        <select id="participation" name="participation">
                            <option></option>
                            <option value="${quest.part.yes}">${quest.part.yes}</option>
                            <option value="${quest.part.no}">${quest.part.no}</option>
                        </select>
                    </p>
                    <p class="babe-view-text">
                        <label for="comments">${quest.comments.title}</label>
                        <textarea name="comments" id="comments" rows="6" cols="40"></textarea>
                    </p>
                    <button id="next" class='babe-view-button'>${config.button}</button>
            </form>`
    }
};

const custom_response_handling = {
    post_test: function(config, CT, babe, answer_container_generator, startingTime) {
        $(".babe-view").append(answer_container_generator(config, CT));

        $("#next").on("click", function(e) {
            // prevents the form from submitting
            e.preventDefault();

            // records the post test info
            babe.global_data.age = $("#age").val();
            babe.global_data.gender = $("#gender").val();
            babe.global_data.handedness = $("#handedness").val();
            babe.global_data.knowledge = $("#knowledge").val();
            babe.global_data.participation = $("#participation").val();
            babe.global_data.comments = $("#comments")
            .val()
            .trim();
            babe.global_data.endTime = Date.now();
            babe.global_data.timeSpent =
                (babe.global_data.endTime -
                    babe.global_data.startTime) /
                60000;

            // moves to the next view
            babe.findNextView();
        });
    }
}