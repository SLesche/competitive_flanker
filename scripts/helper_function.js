function get_random_zero_or_one() {
    return Math.round(Math.random());
}

function get_random_samples_from_list(list, n) {
    if (n <= 0 || n > list.length) {
    console.error('Invalid number of samples');
    return [];
    }

    const shuffled_list = [...list].sort(() => Math.random() - 0.5);
    return shuffled_list.slice(0, n);
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

function get_random_letter_from_string(input_string) {
    const random_index = Math.floor(Math.random() * input_string.length);
    return input_string.charAt(random_index);
}

function extract_stim_from_html(string){
    var match = /<p class = "flanker-stim">(.+)<\/p>/i.exec(string);
    return match ? match[1] : null;
}

function get_random_rt(mean_rt){
    const sd_rt = 100;
    const tau = 300;
    return jsPsych.randomization.sampleExGaussian(mean_rt, sd_rt, tau, positive = true)
}

function add_lower_div(string){
    return '<div class = "split"><div class = "upper-half"></div><div class = "lower-half">' + string + '</div></div>'
}

function add_upper_div(string){
    return '<div class = "split"><div class = "upper-half">' + string + '</div><div class = "lower-half"></div></div>'
}

function get_correct(stim, mapped_responses){
    return mapped_responses[stim];
}

function get_congruency(stim){
    // 5 Stimuli, central is third
    if (stim[1] === stim[3]){
        return 1;
    } else {
        return 0;
    }
}