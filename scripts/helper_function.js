function get_random_zero_or_one() {
    return Math.round(Math.random());
}

function get_random_samples_from_list(list, n) {
    if (n <= 0 || n > list.length) {
    console.error('Invalid number of samples');
    return [];
    }

    const shuffled_list = [...list].sort(() => Math.random() - 0.5);
    return shuffled_list.slice(0, n);
}

function get_random_letter_from_string(input_string) {
    const random_index = Math.floor(Math.random() * input_string.length);
    return input_string.charAt(random_index);
}

function split_string_into_list(s) {
    // if s is a string, we return a list of its characters
    if (typeof s === 'string')
        return s.split('');
    else
        // otherwise we return s:
        return s;
}

// Function to generate random response times from a normal distribution
function draw_from_random_normal(mean, standard_deviation) {
    let u1 = Math.random();
    let u2 = Math.random();
  
    let z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    let random_value = mean + z0 * standard_deviation;
  
    // Ensure the value is within a reasonable range
    return Math.max(0, random_value);
}

function draw_random_response_time(mean_rt, sd_rt){
    // Log-Normal nehmen 
    rt = draw_from_random_normal(mean_rt, sd_rt);
    return rt
}

function draw_random_accuracy(mean_acc){
    let u1 = Math.random();
    let acc = u1 > mean_acc ? 1 : 0;
    return acc
}