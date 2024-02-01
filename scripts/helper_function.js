export function get_random_zero_or_one() {
    return Math.round(Math.random());
}

export function get_random_samples_from_list(list, n) {
    if (n <= 0 || n > list.length) {
    console.error('Invalid number of samples');
    return [];
    }

    const shuffled_list = [...list].sort(() => Math.random() - 0.5);
    return shuffled_list.slice(0, n);
}

export function get_random_letter_from_string(input_string) {
    const random_index = Math.floor(Math.random() * input_string.length);
    return input_string.charAt(random_index);
}

export function split_string_into_list(s) {
    // if s is a string, we return a list of its characters
    if (typeof s === 'string')
        return s.split('');
    else
        // otherwise we return s:
        return s;
}