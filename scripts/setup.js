let jsPsych = initJsPsych(
    /**
    {
        on_finish: function() {
            jsPsych.data.get().localSave('csv', experiment_file);
        },
    } 
    */  
);

const experiment_name = "Repetition Alert Task";
const experiment_short_name = "rep_alert_task";
let init_date = new Date();
    jsPsych.data.addProperties({
        date: ("0" + init_date.getDate()).slice(-2) + '_' + ("0" + (init_date.getMonth() + 1)).slice(-2) + '_' + init_date.getFullYear(),
        time: init_date.getHours() + "_" + init_date.getMinutes() + "_" + init_date.getSeconds(),
    });

let init_time = init_date.getFullYear() + "_" + (init_date.getMonth() + 1) + "_" + init_date.getDate() + "_" + init_date.getHours() + "_" + init_date.getMinutes() + "_" + init_date.getSeconds()
let timeline = [];

// IN the real experiment, 250 responses.
// 3*85 pro Block
const n_trials = 85;
const n_blocks = 3;
const n_practice = 30;
const n_letter_combinations = 1;
const possible_response_keys = ["d", "l"];
const possible_stimuli = ["MN", "EF", "OQ", "VU", "IT", "PR"];

const possible_dot_colors = ["green", "red"];
var frequency_first = 0.8;

const trial_duration = 1000;
const stim_duration = 200;
const feedback_dur = 300;
const rsi_duration = 500;
const fixation_dur = 350;

// Remove later
const subject_number = 1;

// init values
var trial_num = 0;
var block_num = 0;
var repeat_practice_now = 1;

var block_possible_stimuli = get_random_samples_from_list(possible_stimuli, n_letter_combinations);
var mapped_responses = map_responses_to_letters(subject_number, block_possible_stimuli);

var current_score = 0;
var current_subject_score = 0;
var current_partner_score = 0;
var is_experimental = 0;
var is_cooperative = 1;

const possible_conditions = ["cooperative", "competitive"];
const random_order = jsPsych.randomization.sampleWithoutReplacement(possible_conditions, 2);
const conditions = [random_order[0], "control", random_order[1]];
var current_condition = "experiment_begin";
var icondition = 0;

// record the condition assignment in the jsPsych data
// this adds a property called 'subject' and a property called 'condition' to every trial
jsPsych.data.addProperties({
  subject: subject_number,
});

const experiment_file = "./data/" + experiment_short_name + "_" + subject_number + "_" + init_time + ".csv"
