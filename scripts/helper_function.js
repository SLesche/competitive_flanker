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

function extract_stim_from_html(string){
    var match = /<p class = "rat-stim">(.+)<\/p>/i.exec(string);
    return match ? match[1] : null;
}

function get_random_rt(mean_rt){
    const sd_rt = 100;
    const tau = 300;
    return jsPsych.randomization.sampleExGaussian(mean_rt, sd_rt, tau, positive = true)
}

function get_random_repeat(){
    return Math.random() > 0.5 ? 0 : 1;
}

function add_lower_div(string){
    return '<div class = "split"><div class = "upper-half"></div><div class = "lower-half">' + string + '</div></div>'
}

function add_upper_div(string){
    return '<div class = "split"><div class = "upper-half">' + string + '</div><div class = "lower-half"></div></div>'
}

function get_correct(stim, is_repeat){
    if (is_repeat){
        return correct = " ";
    } else {
        const central_stim = extract_stim_from_html(stim);
        return correct = central_stim.toLowerCase();
    }
}