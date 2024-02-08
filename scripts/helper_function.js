function get_random_zero_or_one() {
    return Math.round(Math.random());
}

function get_random_samples_from_list(list, n) {
    jsPsych.randomization.sampleWithoutReplacement(list, n);
    return jsPsych.randomization.sampleWithoutReplacement(list, n);
}

function get_random_stimulus(){
    const stim = Math.random() > 0.5 ? possible_stimuli[0] : possible_stimuli[1];
    return `<p class = "rat-stim">${stim}</p>`;
}
function get_alternate_stimulus(){
    let previous_stim = null;
    if (jsPsych.data.get().filter([{type: 'trial'}]).last(1).values()[0] == null | trial_num === 0){
          previous_stim = possible_stimuli[0];
    } else {
          previous_stim = jsPsych.data.get().filter([{type: 'trial'}]).last(1).values()[0].stimulus;
    }  
    alternate_stim = possible_stimuli.find(item => item !== extract_stim_from_html(previous_stim));
    return `<p class = "rat-stim">${alternate_stim}</p>`;
}

function update_counter(value){
    return `<div class = "single-counter" id = "counter"><p class = "counter-text">${value}</p></div>`
}

function get_random_letter_from_string(input_string) {
    const random_index = Math.floor(Math.random() * input_string.length);
    return input_string.charAt(random_index);
}

function extract_stim_from_html(string){
    var match = /<p class = "flanker-stim">(.+)<\/p>/i.exec(string);
    return  match[1];
}

function get_random_rt(mean_rt){
    const sd_rt = 100;
    const tau = 300;
    return jsPsych.randomization.sampleExGaussian(mean_rt, sd_rt, tau, positive = true)
}

function add_lower_div(string){
    return '<div class = "split" id = "split"><div class = "upper-half" id = "upper"></div><div class = "lower-half active-border" id = "lower">' + string + '</div></div>'
}

function add_upper_div(string){
    return '<div class = "split" id = "split"><div class = "upper-half active-border" id = "upper">' + string + '</div><div class = "lower-half" id = "lower"></div></div>'
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