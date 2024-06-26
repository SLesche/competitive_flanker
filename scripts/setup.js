let jsPsych = initJsPsych(
    /**
    {
        on_finish: function() {
            jsPsych.data.get().localSave('csv', experiment_file);
        },
    } 
    */  
);

const experiment_name = "Flanker Task";
const experiment_short_name = "comp_flanker";
let init_date = new Date();
    jsPsych.data.addProperties({
        date: ("0" + init_date.getDate()).slice(-2) + '_' + ("0" + (init_date.getMonth() + 1)).slice(-2) + '_' + init_date.getFullYear(),
        time: init_date.getHours() + "_" + init_date.getMinutes() + "_" + init_date.getSeconds(),
    });

let init_time = init_date.getFullYear() + "_" + (init_date.getMonth() + 1) + "_" + init_date.getDate() + "_" + init_date.getHours() + "_" + init_date.getMinutes() + "_" + init_date.getSeconds()
let timeline = [];

// IN the real experiment, 300 responses.
// 3*100 pro Block
const n_trials = 100; // 100
const n_blocks = 3; // 3
const n_practice = 30; // 30
const n_letter_combinations = 1;
const possible_response_keys = ["d", "l"];
const possible_stimuli = ["MN", "EF", "OQ", "VU", "IT", "PR"];
var partner_accuracy = 0.85;

const possible_dot_colors = ["green", "red"];
var frequency_first = partner_accuracy;

const trial_duration = 1000;
const stim_duration = 200;
const feedback_dur = 450;
const rsi_duration = 500;
const fixation_dur = 200;

// Remove later
var subject_number = 1;
var experiment_file = "data_" + experiment_short_name + "_" + subject_number + "_" + init_time + ".csv";


// init values
var trial_num = 0;
var block_num = 0;
var repeat_practice_now = 1;

var block_possible_stimuli = get_random_samples_from_list(possible_stimuli, n_letter_combinations);
var mapped_responses = map_responses_to_letters(subject_number, block_possible_stimuli);

var current_score = 0;
var current_subject_score = 0;
var current_partner_score = 0;
var total_score = 0;
var is_experimental = 0;
var is_cooperative = 1;

const possible_conditions = ["cooperative", "competitive"];
const random_order = jsPsych.randomization.sampleWithoutReplacement(possible_conditions, 2);
const conditions = [random_order[0], "control", random_order[1]];
var current_condition = "experiment_begin";
var icondition = 0;
