// here debriefing
let debriefing = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function(data) {
      return `<p class = "normal-text">Vielen Dank für deine Teilnahme!</br>Du hast ${total_score} Punkte erreicht. Dieser Teil der Studie ist jetzt beendet.</p>`
    },
    data: {type: 'instructions'},
    on_start: function() {
      jsPsych.data.get().localSave('csv', experiment_file);
        }
  }