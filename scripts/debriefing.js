// here debriefing
const debriefing = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: 'Debriefing here',
    on_start: function() {
      jsPsych.data.get().localSave('csv', experiment_file);
        }
  }

timeline.push(debriefing);