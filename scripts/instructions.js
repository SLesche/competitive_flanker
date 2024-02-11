const welcome_screen = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<div class = "normal-text">Herzlich Willkommen zum Experiment.</div>',
    choices: ['Weiter'],
    data: {type: 'instructions'},
}

const survey_trial = {
    type: jsPsychSurvey,
    pages: [
        [
        {
            type: 'text',
            prompt: "Alter",
            name: 'age',
            textbox_columns: 5,
            required: true,
        },
        {
            type: 'multi-choice',
            prompt: "Geschlecht",
            options: ['weiblich', 'männlich', 'divers', 'sonstige'],
            name: 'gender',
            required: true,
        },
        {
            type: 'text',
            prompt: "Tätigkeit",
            name: 'occupation',
            required: true,
        },
    /*
        {
            type: 'multi-choice',
            prompt: "Tätigkeit",
            options: ['Schüler*in'],
            name: 'occupation',
            required: true,
        },
    */
        {
            type: 'text',
            prompt: "Studienfach (bei Studierenden)",
            name: 'subject',
            required: false,
        },
        ]
    ],
    title: 'Demographische Daten',
    button_label_next: 'Weiter',
    button_label_back: 'Zurück',
    button_label_finish: 'Weiter',
    show_question_numbers: 'onPage',
    data: {type: 'demographics'},
};

const consent_screen = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<div class = "normal-text">Hier Consent</div>',
    choices: ['Weiter'],
    data: {type: 'instructions'},
}
const general_description = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<div class = "normal-text">Du wirst im Laufe des Experimentes eine Aufgabe entweder alleine, mit einer/m Partner:in oder gegen einer/n Partner:in bearbeiten.</br>Dabei kannst du für jede richtige Antwort Punkte sammeln. Wenn du am Ende unter den besten 25% bist, hast du automatisch die Chance einen Gutschein zu gewinnen.</br>Spielst du alleine, zählen nur deine Punkte in dieser Runde. Spielst du <b>mit</b> einer/m Partner:in, zählen auch richtige Antworten deiner Partnerin. Spielst du <b>gegen</b> eine/n Partner:in, so werden richtige Antworten des Partners oder der Partnerin am Ende von deinem Score abgezogen.</div>',
    choices: ['Weiter'],
    data: {type: 'instructions'},
}
const partner_description = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<div class = "normal-text">Da wir euch nicht zu zweit an den PC setzen wollen und nicht garantieren können, dass immer zwei Personen da sind, werden eure Antworten aufgezeichnet und als Partner:in für die nächste Person, die an eurem Rechner sitzt, benutzt.</br>Ihr spielt also nicht "live" mit/gegen eine Partner:in, sondern mit der letzten Versuchsperson.</br>Die Antwort auf der oberen Hälfte des Screens ist immer die Antwort des Partners oder der Partnerin (rot), die untere Hälfte ist eure (grün).</div>',
    choices: ['Weiter'],
    data: {type: 'instructions'},
}
const flanker_description = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<div class = "normal-text">Deine Aufgabe ist es, in einer Reihe von 5 Buchstaben auf den mittleren dieser Buchstaben zu reagieren. </br> Bevor die Aufgabe losgeht, wird dir immer gesagt, mit welcher Taste ("D" oder "L") du auf welchen Buchstaben reagieren musst. </br> Wenn z.B. A -> "D" und B -> "L", dann musst du bei "AA<b>A</b>AA" oder "BB<b>A</b>BB" mit "D" reagieren.</br>Bei AA<b>B</b>AA oder BB<b>B</b>BB müsstest du mit "L" reagieren.</div>',
    choices: ['Weiter'],
    data: {type: 'instructions'},
}

const procedure_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<div class = "normal-text">Für jeden Durchgang wird dir am Anfang angezeigt, auf welchen Buchstaben in der Mitte du wie zu reagieren hast.</br>Dann hast du ${n_practice} Durchgänge Zeit, um einmal ohne Partner:in und ohne Score zu üben, bevor es dann richtig losgeht.</div>`,
    choices: ['Weiter'],
    data: {type: 'instructions'},
}

const instructions = {
    timeline: [general_description, partner_description, flanker_description, procedure_instructions],
    on_finish: function(data){
        // after instructions, the conditions start
        current_condition = conditions[0];
        icondition = 1;
    }
}