// here debriefing
const debriefing = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: 'Vielen Dank für deine Teilnahme!',
    data: {type: 'instructions'},
    on_start: function() {
      jsPsych.data.get().localSave('csv', experiment_file);
        }
  }