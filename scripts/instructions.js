const instructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: 'Instructions here'
}
  
timeline.push(instructions)

const split_upper_half = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<div class="upper-center">Upper Half</div>', 
}

timeline.push(split_upper_half)

const split_lower_half = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<div class="lower-center">Lower Half</div>', 
}

timeline.push(split_lower_half)