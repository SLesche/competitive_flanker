function map_responses_to_letters(subject_number, letter_combinations) {
    const response_mapping = {};
  
    for (const entry of letter_combinations) {
      const [char1, char2] = entry.split('');
  
      // Determine responses based on even or odd subject_number
      const response1 = subject_number % 2 === 0 ? 'd' : 'l';
      const response2 = subject_number % 2 === 0 ? 'l' : 'd';
      
      if (response1 == 'd'){
        response_mapping[char1] = response1;
        response_mapping[char2] = response2;
      } else {
        response_mapping[char2] = response2;
        response_mapping[char1] = response1;
      }
    }
  
    return response_mapping;
}

function get_condition_instructions(condition){
  let instruction = "";
  switch (condition) {
    case 'control':
      instruction = `<div class = "normal-text">In den kommenden Durchgängen wirst du <b>alleine</b> die Aufgabe bearbeiten.</br>Es gibt auch keinen Partner, der die Aufgabe bearbeitet, sondern nur farbige Punkte, die </b>zufällig</b> angezeigt werden.</div>`;
      break;
    case 'competitive':
      instruction = `<div class = "normal-text">In den kommenden Durchgängen wirst du <b>gegen</b> die vorherige Versuchsperson antreten!</br>Das Punktekonto wird jetzt in zwei geteilt. Du bekommst weiterhin Punkte für richtige Antworten. Deine Gegner:in bekommt allerdings auch Punkte für richtige Antworten.</br>Punkte deiner Gegner:in werden am Ende von deinen Punkten abgezogen.</div>`;
      break;
    case 'cooperative':
      instruction = `<div class = "normal-text">In den kommenden Durchgängen wirst du <b>mit</b> der vorherigen Versuchsperson antreten!</br>Es gibt ein gemeinsames Punktekonto. Du bekommst weiterhin Punkte für richtige Antworten. Richtige Antworten deiner Partner:in zählen auch für euer gemeinsames Punktekonto</div>`;
      break;
    default:
      instruction = "this is a default, you should not see it";
  }

  return instruction
}