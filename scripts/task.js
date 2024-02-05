function map_responses_to_letters(subject_number, letter_combinations) {
    const response_mapping = {};
  
    for (const entry of letter_combinations) {
      const [char1, char2] = entry.split('');
  
      // Determine responses based on even or odd subject_number
      const response1 = subject_number % 2 === 0 ? 'd' : 'l';
      const response2 = subject_number % 2 === 0 ? 'l' : 'd';
  
      response_mapping[char1] = response1;
      response_mapping[char2] = response2;
    }
  
    return response_mapping;
}
  
function create_partner_response(block_possible_stimuli, mapped_responses){
    flanker_trial = create_flanker_trial(block_possible_stimuli, mapped_responses)

    const mean_rt = 450;
    const sd_rt = 50;
    const mean_acc = 0.8
    const partner_rt = draw_random_response_time(mean_rt, sd_rt);
    const partner_acc = draw_random_accuracy(mean_acc);

    flanker_trial.trial_duration = partner_rt;
    flanker_trial.choices = "NO_KEYS";

    // Now add a screen simulating feedback about the partners response
}
  
var trial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function(block_possible_stimuli){
        const current_letters = get_random_samples_from_list(block_possible_stimuli, 1)[0];
        const current_congruency = Math.round(Math.random());
        const which_central = Math.round(Math.random());
        const central_stimulus = current_letters[which_central];

        if (current_congruency === 1){
            flanking_stimulus = central_stimulus;
        } else {
            flanking_stimulus = current_letters[1 - which_central];
        }
        const current_stimulus = flanking_stimulus + flanking_stimulus + central_stimulus + flanking_stimulus + flanking_stimulus
        return add_lower_div(`<p class = "flanker-stim">${current_stimulus}</p>`)
    },
    choices: possible_response_keys,
    stimulus_duration: stim_duration,
    trial_duration: trial_duration, // Adjust as needed
    response_ends_trial: true,
    on_finish: function(data) {
        // Record accuracy and congruency
        correct_response = get_correct(data.stimulus, mapped_responses);
        data.accuracy = data.response === correct_response ? 1 : 0;

        data.current_congruency = get_congruency(extract_stim_from_html(data.stimulus));
    }
};
  

var block_instruction = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function(mapped_responses){
        let block_instruction_message = "";

        let letter_count = 0;
        
        for (const letter in mapped_responses) {
            const responseChar = mapped_responses[letter];
            block_instruction_message += `"${letter}" -> ${responseChar}, `;
        
            // Add a newline after every 2 combinations
            if (++letter_count % 2 === 0) {
            block_instruction_message += "<br>";
            }
        }  
        
        // Remove the trailing comma and space
        block_instruction_message = block_instruction_message.slice(0, -6);

        return `<p class = "normal-text">${block_instruction_message}</p>`;
    },
    choices: "ALL_KEYS",
    response_ends_trial: true,
    prompt: "Drücke eine beliebige Taste um fortzufahren."
}
  
  for (let iblock = 0; iblock < n_blocks; iblock++){
    const block_stimuli = get_random_samples_from_list(possible_stimuli, n_letter_combinations);
    const mapped_responses = map_responses_to_letters(subject_number, block_stimuli);
  
    // Instruction screen here
    timeline.push(get_block_instruction(mapped_responses))
  
    // Practice runs here, with feedback and stim_duration?
    for (let ipractice = 0; ipractice < n_practice; ipractice++){
      const trial = create_flanker_trial(block_stimuli, mapped_responses);
      const feedback = create_feedback();
      const fixation_cross = create_fixation_cross(rsi_duration);
      timeline.push(trial);
      timeline.push(feedback);
      timeline.push(fixation_cross);
    }
    // TODO: screen where people can choose to rerun practice trials#
  
    for (let itrial = 0; itrial < n_trials; itrial++) {
      const trial = create_flanker_trial(block_stimuli, mapped_responses)
      const fixation_cross = create_fixation_cross(rsi_duration);
      timeline.push(trial);
      timeline.push(fixation_cross);
    }
  
    // Here short self-paced break
  }