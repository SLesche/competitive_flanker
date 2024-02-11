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

function get_condition_instructions(condition){
  let instruction = "";
  switch (condition) {
    case 'control':
      instruction = "Now come control trials";
      break;
    case 'competitive':
      instruction = "Now you compete with the other person";
      break;
    case 'cooperative':
      instruction = "Now you can cooperate with the other person";
      break;
    default:
      instruction = "this is a default, you should not see it";
  }

  return instruction
}