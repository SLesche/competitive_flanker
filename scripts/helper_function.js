function get_random_samples_from_list(list, n) {
    jsPsych.randomization.sampleWithoutReplacement(list, n);
    return jsPsych.randomization.sampleWithoutReplacement(list, n);
}

function get_random_dot_color(possible_dot_colors, frequency_first){
    if (possible_dot_colors.length > 2){
        console.warn("More than 2 dot colors supplied");
    }
    let rng = Math.random();
    if (rng < frequency_first){
        return possible_dot_colors[0];
    } else {
        return possible_dot_colors[1];
    }
}

function update_counter(value){
    return `<div class = "single-counter" id = "counter"><p class = "counter-text">${value}</p></div>`
}

function update_competitive_counter(subject_value, partner_value){
    return `<div class = "subject-counter" id = "subject-counter"><p class = "counter-text">${subject_value}</p></div><div class = "partner-counter" id = "partner-counter"><p class = "counter-text">${partner_value}</p></div>`
}

// Function to increase score
function increaseScore(counter_html) {
    // Define the regex pattern to match the opening tag of the div with class "single-counter"
    var pattern = /<div\s+class\s*=\s*"single-counter"(.*?)>/i;
    
    // Add the class "score-increase" to the opening tag
    var updatedHtmlString = counter_html.replace(pattern, '<div class="single-counter score-increase"$1>');

    return updatedHtmlString;
}

// Function to decrease score
function decreaseScore(counter_html) {
    // Define the regex pattern to match the opening tag of the div with class "single-counter"
    var pattern = /<div\s+class\s*=\s*"single-counter"(.*?)>/i;
        
    // Add the class "score-increase" to the opening tag
    var updatedHtmlString = counter_html.replace(pattern, '<div class="single-counter score-decrease"$1>');

    return updatedHtmlString;
}

// Function to move score
function move_score(feedback_html, direction) {
    // Define the regex pattern to match the opening tag of the div with class "single-counter"
    var pattern = /<p\s+class\s*=\s*"feedback-stim"(.*?)>/i;
        
    // Add the class "score-increase" to the opening tag
    if (direction){
        var updatedHtmlString = feedback_html.replace(pattern, '<p class="feedback-stim score-move-up"$1>');
    } else {
        var updatedHtmlString = feedback_html.replace(pattern, '<p class="feedback-stim score-move-down"$1>');      
    }
    return updatedHtmlString;
}

function get_random_letter_from_string(input_string) {
    const random_index = Math.floor(Math.random() * input_string.length);
    return input_string.charAt(random_index);
}

function extract_stim_from_html(string) {
    // Check if the string matches the pattern for the flanker-stim element
    var stimMatch = /<p class = "flanker-stim">([A-Z]{5})<\/p>/i.exec(string);
    if (stimMatch) {
        return stimMatch[1];
    }

    // Check if the string contains a dot element
    var dotMatch = /<div class = "([a-z]+)-dot"><\/div>/i.exec(string);
    if (dotMatch) {
        return dotMatch[1];
    }
    console.log(["stim", stimMatch])
    console.log(["dot", dotMatch])
    console.log(["no match found for:", string])
    // If no match found, return null or handle it as appropriate
    return null; // or throw an error, return a default value, etc.
}

function get_random_rt(mean_rt){
    const sd_rt = 100;
    const tau = 300;
    return jsPsych.randomization.sampleExGaussian(mean_rt, sd_rt, tau, positive = true)
}

function add_lower_div(string){
    return '<div class = "split" id = "split"><div class = "upper-half inactive-shadow" id = "upper"></div><div class = "lower-half subject-active-border" id = "lower">' + string + '</div></div>'
}

function add_upper_div(string){
    return '<div class = "split" id = "split"><div class = "upper-half partner-active-border" id = "upper">' + string + '</div><div class = "lower-half inactive-shadow" id = "lower"></div></div>'
}

function get_correct(stim, mapped_responses){
    // 5 Stimuli, central is third
    return mapped_responses[stim[2]];
}

function get_congruency(stim){
    // 5 Stimuli, central is third
    if (stim[0] === stim[2]){
        return 1;
    } else {
        return 0;
    }
}

function add_flash(html_string, screen_half, color){
    if (screen_half == "upper") {
        pattern = "upper-half";
    } else if (screen_half == "lower"){
        pattern = "lower-half";
    }

    var updatedHtmlString = html_string.replace(pattern, pattern + " flash-" + color);

    return updatedHtmlString;
}