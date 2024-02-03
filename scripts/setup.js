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

const n_trials = 100;
const n_blocks = 5;
const n_practice = 30;
const n_alternating_start = 5;
const n_repeat_trials = 20;
const practice_repeat_percentage = 0;
const possible_response_keys = ["d", "l", " "];
const possible_stimuli = ["D", "L"]

const percentage_repeat = 0.25;
const trial_duration = 1000;
const stim_duration = 200;
const feedback_dur = 400;
const rsi_duration = 500;

// Remove later
const subject_number = 1;

// record the condition assignment in the jsPsych data
// this adds a property called 'subject' and a property called 'condition' to every trial
jsPsych.data.addProperties({
  subject: subject_number,
});

const experiment_file = "./data/" + experiment_short_name + "_" + subject_number + "_" + init_time + ".csv"
