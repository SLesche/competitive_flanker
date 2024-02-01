var jsPsychMoodOfCrowdResponse = (function (jspsych) {
    'use strict';

    const info = {
        name: "emo-face-response",
        parameters: {
            /** Array containing the key(s) the subject is allowed to press to respond to the stimulus. */
            choices: {
                type: jspsych.ParameterType.KEYS,
                pretty_name: "Choices",
                default: "ALL_KEYS",
            },
            /** How long to show the stimulus. */
            stimulus_duration: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Stimulus duration",
                default: 500,
              
            },
            /**How long to show the trial.*/
            trial_duration:{
              type: jspsych.ParameterType.INT,
              pretty_name:"Trial duration",
              default: 5000,
            },
            
            /** If true, trial will end when subject makes a response. */
            response_ends_trial: {
                type: jspsych.ParameterType.BOOL,
                pretty_name: "Response ends trial",
                default: true,
            },
            /** How many emotional faces to show. */
            num_emotional: {
                type: jspsych.ParameterType.INT,
                pretty_name: "Number emotional",
                default: 10,
            },
            /** If true, happy (not angry) faces will be shown. */
            happy_faces: {
                type: jspsych.ParameterType.BOOL,
                pretty_name: "Happy faces are shown",
                default: true,
            },
            /**If true, female faces will be shown. */
            gender:{
              type: jspsych.ParameterType.BOOL,
              pretty_name:"Female faces are shown",
              default: true,
            }
        },
    };
    /**
     * **emo-face-response**
     *
     * Display a 'emo-face' trial and wait for keyboard response
     *
     * @author Emelie Lenze
     */
    class MoodOfCrowdResponsePlugin {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }
        trial(display_element, trial) {
            var range = function(start, stop, step) {
                var a = [start];
                while (start < stop) {
                    start += step || 1;
                    a.push(start);
                }
                return a;
            };

            const IMAGE_NAMES = ['AF01ANS.PNG', 'BF01ANS.PNG', 'AF01HAS.PNG', 'BF01HAS.PNG', 'AF01NES.PNG', 'BF01NES.PNG', 'AF02ANS.PNG', 'BF02ANS.PNG', 'AF02HAS.PNG', 'BF02HAS.PNG', 'AF02NES.PNG', 'BF02NES.PNG', 'BF03ANS.PNG', 'AF03ANS.PNG', 'BF03HAS.PNG', 'AF03HAS.PNG', 'BF03NES.PNG', 'AF03NES.PNG', 'AF04ANS.PNG', 'BF04ANS.PNG', 'AF04HAS.PNG', 'BF04HAS.PNG', 'BF04NES.PNG', 'AF04NES.PNG', 'BF05ANS.PNG', 'AF05ANS.PNG', 'BF05HAS.PNG', 'AF05HAS.PNG', 'AF05NES.PNG', 'BF05NES.PNG', 'AF06ANS.PNG', 'BF06ANS.PNG', 'BF06HAS.PNG', 'AF06HAS.PNG', 'AF06NES.PNG', 'BF06NES.PNG', 'AF07ANS.PNG', 'BF07ANS.PNG', 'BF07HAS.PNG', 'AF07HAS.PNG', 'BF07NES.PNG', 'AF07NES.PNG', 'AF08ANS.PNG', 'BF08ANS.PNG', 'AF08HAS.PNG', 'BF08HAS.PNG', 'AF08NES.PNG', 'BF08NES.PNG', 'BF09ANS.PNG', 'AF09ANS.PNG', 'AF09HAS.PNG', 'BF09HAS.PNG', 'BF09NES.PNG', 'AF09NES.PNG', 'AF10ANS.PNG', 'BF10ANS.PNG', 'AF10HAS.PNG', 'BF10HAS.PNG', 'AF10NES.PNG', 'BF10NES.PNG', 'AF11ANS.PNG', 'BF11ANS.PNG', 'BF11HAS.PNG', 'AF11HAS.PNG', 'AF11NES.PNG', 'BF11NES.PNG', 'BF12ANS.PNG', 'AF12ANS.PNG', 'AF12HAS.PNG', 'BF12HAS.PNG', 'AF12NES.PNG', 'BF12NES.PNG', 'AF13ANS.PNG', 'AF13HAS.PNG', 'BF13HAS.PNG', 'AF13NES.PNG', 'BF13NES.PNG', 'BF14ANS.PNG', 'AF14ANS.PNG', 'AF14HAS.PNG', 'BF14HAS.PNG', 'AF14NES.PNG', 'BF14NES.PNG', 'BF15ANS.PNG', 'AF15ANS.PNG', 'AF15HAS.PNG', 'BF15HAS.PNG', 'AF15NES.PNG', 'BF15NES.PNG', 'AF16ANS.PNG', 'BF16ANS.PNG', 'AF16HAS.PNG', 'BF16HAS.PNG', 'BF16NES.PNG', 'AF16NES.PNG', 'AF17ANS.PNG', 'BF17ANS.PNG', 'BF17HAS.PNG', 'AF17HAS.PNG', 'BF17NES.PNG', 'AF17NES.PNG', 'BF18ANS.PNG', 'AF18ANS.PNG', 'BF18HAS.PNG', 'AF18HAS.PNG', 'BF18NES.PNG', 'AF18NES.PNG', 'AF19ANS.PNG', 'BF19ANS.PNG', 'BF19HAS.PNG', 'AF19HAS.PNG', 'BF19NES.PNG', 'AF19NES.PNG', 'BF20ANS.PNG', 'AF20ANS.PNG', 'AF20HAS.PNG', 'BF20HAS.PNG', 'BF20NES.PNG', 'AF20NES.PNG', 'BF21ANS.PNG', 'AF21ANS.PNG', 'BF21HAS.PNG', 'AF21HAS.PNG', 'AF21NES.PNG', 'BF21NES.PNG', 'BF22ANS.PNG', 'AF22ANS.PNG', 'AF22HAS.PNG', 'BF22HAS.PNG', 'BF22NES.PNG', 'AF22NES.PNG', 'AF23ANS.PNG', 'BF23ANS.PNG', 'AF23HAS.PNG', 'BF23HAS.PNG', 'BF23NES.PNG', 'AF23NES.PNG', 'BF24ANS.PNG', 'AF24ANS.PNG', 'AF24HAS.PNG', 'BF24HAS.PNG', 'AF24NES.PNG', 'BF24NES.PNG', 'AF25ANS.PNG', 'BF25ANS.PNG', 'AF25HAS.PNG', 'BF25HAS.PNG', 'AF25NES.PNG', 'BF25NES.PNG', 'BF26ANS.PNG', 'AF26ANS.PNG', 'BF26HAS.PNG', 'AF26HAS.PNG', 'AF26NES.PNG', 'BF26NES.PNG', 'AF27ANS.PNG', 'BF27ANS.PNG', 'BF27HAS.PNG', 'AF27HAS.PNG', 'AF27NES.PNG', 'BF27NES.PNG', 'BF28ANS.PNG', 'AF28ANS.PNG', 'AF28HAS.PNG', 'BF28HAS.PNG', 'BF28NES.PNG', 'AF28NES.PNG', 'AF29ANS.PNG', 'BF29ANS.PNG', 'BF29HAS.PNG', 'AF29HAS.PNG', 'AF29NES.PNG', 'BF29NES.PNG', 'BF30ANS.PNG', 'AF30ANS.PNG', 'BF30HAS.PNG', 'AF30HAS.PNG', 'BF30NES.PNG', 'AF30NES.PNG', 'AF31ANS.PNG', 'BF31ANS.PNG', 'AF31HAS.PNG', 'BF31HAS.PNG', 'BF31NES.PNG', 'AF31NES.PNG', 'BF32ANS.PNG', 'AF32ANS.PNG', 'AF32HAS.PNG', 'BF32HAS.PNG', 'AF32NES.PNG', 'BF32NES.PNG', 'BF33ANS.PNG', 'AF33ANS.PNG', 'BF33HAS.PNG', 'AF33HAS.PNG', 'BF33NES.PNG', 'AF33NES.PNG', 'BF34ANS.PNG', 'AF34ANS.PNG', 'BF34HAS.PNG', 'AF34HAS.PNG', 'BF34NES.PNG', 'AF34NES.PNG', 'AF35ANS.PNG', 'BF35ANS.PNG', 'AF35HAS.PNG', 'BF35HAS.PNG', 'BF35NES.PNG', 'AF35NES.PNG', 'AF36NES.PNG', 'AF37NES.PNG', 'AF38NES.PNG', 'AF39NES.PNG', 'AF40NES.PNG', 'AF41NES.PNG', 'AF42NES.PNG', 'AF43NES.PNG', 'AF44NES.PNG', 'AF45NES.PNG', 'AF46NES.PNG', 'AF47NES.PNG', 'AF48NES.PNG', 'AF49NES.PNG', 'AF50NES.PNG', 'AF51NES.PNG', 'AF52NES.PNG', 'AF53NES.PNG', 'AF54NES.PNG', 'AF55NES.PNG', 'AF56NES.PNG', 'AF57NES.PNG', 'AF58NES.PNG', 'AF59NES.PNG', 'AF60NES.PNG', 'AF61NES.PNG', 'AF62NES.PNG', 'AF63NES.PNG', 'AF64NES.PNG', 'AF65NES.PNG', 'AF66NES.PNG', 'AF67NES.PNG', 'BM01ANS.PNG', 'AM01ANS.PNG', 'AM01HAS.JPG', 'BM01HAS.JPG', 'BM01HAS.PNG', 'AM01HAS.PNG', 'AM01NES.PNG', 'BM01NES.PNG', 'AM02ANS.PNG', 'BM02HAS.JPG', 'AM02HAS.JPG', 'BM02HAS.PNG', 'AM02HAS.PNG', 'AM02NES.PNG', 'BM02NES.PNG', 'AM03ANS.PNG', 'BM03ANS.PNG', 'AM03HAS.JPG', 'BM03HAS.JPG', 'BM03HAS.PNG', 'AM03HAS.PNG', 'AM03NES.PNG', 'BM03NES.PNG', 'AM04ANS.PNG', 'BM04ANS.PNG', 'AM04HAS.JPG', 'BM04HAS.JPG', 'AM04HAS.PNG', 'BM04HAS.PNG', 'AM04NES.PNG', 'BM04NES.PNG', 'BM05ANS.PNG', 'AM05ANS.PNG', 'BM05HAS.JPG', 'AM05HAS.JPG', 'BM05HAS.PNG', 'AM05HAS.PNG', 'AM05NES.PNG', 'BM05NES.PNG', 'BM06ANS.PNG', 'AM06ANS.PNG', 'BM06HAS.JPG', 'AM06HAS.JPG', 'AM06HAS.PNG', 'BM06HAS.PNG', 'BM06NES.PNG', 'AM06NES.PNG', 'BM07ANS.PNG', 'AM07ANS.PNG', 'AM07HAS.JPG', 'BM07HAS.JPG', 'BM07HAS.PNG', 'AM07HAS.PNG', 'AM07NES.PNG', 'BM07NES.PNG', 'BM08ANS.PNG', 'AM08ANS.PNG', 'BM08HAS.JPG', 'AM08HAS.JPG', 'AM08HAS.PNG', 'BM08HAS.PNG', 'BM08NES.PNG', 'AM08NES.PNG', 'AM09ANS.PNG', 'BM09ANS.PNG', 'BM09HAS.JPG', 'AM09HAS.JPG', 'AM09HAS.PNG', 'BM09HAS.PNG', 'BM09NES.PNG', 'AM09NES.PNG', 'BM10ANS.PNG', 'AM10ANS.PNG', 'AM10HAS.JPG', 'BM10HAS.JPG', 'AM10HAS.PNG', 'BM10HAS.PNG', 'BM10NES.PNG', 'AM10NES.PNG', 'AM11ANS.PNG', 'BM11ANS.PNG', 'BM11HAS.JPG', 'AM11HAS.JPG', 'BM11HAS.PNG', 'AM11HAS.PNG', 'AM11NES.PNG', 'BM11NES.PNG', 'BM12ANS.PNG', 'AM12HAS.JPG', 'BM12HAS.JPG', 'BM12HAS.PNG', 'AM12HAS.PNG', 'BM12NES.PNG', 'BM13ANS.PNG', 'AM13ANS.PNG', 'BM13HAS.JPG', 'AM13HAS.JPG', 'AM13HAS.PNG', 'BM13HAS.PNG', 'AM13NES.PNG', 'BM13NES.PNG', 'BM14ANS.PNG', 'AM14ANS.PNG', 'BM14HAS.JPG', 'AM14HAS.JPG', 'BM14HAS.PNG', 'AM14HAS.PNG', 'AM14NES.PNG', 'BM14NES.PNG', 'BM15ANS.PNG', 'AM15HAS.JPG', 'AM15HAS.PNG', 'AM15NES.PNG', 'AM16ANS.PNG', 'BM16ANS.PNG', 'AM16HAS.JPG', 'BM16HAS.JPG', 'AM16HAS.PNG', 'BM16HAS.PNG', 'BM16NES.PNG', 'AM17ANS.PNG', 'BM17ANS.PNG', 'AM17HAS.JPG', 'BM17HAS.JPG', 'BM17HAS.PNG', 'AM17HAS.PNG', 'AM17NES.PNG', 'BM18ANS.PNG', 'AM18ANS.PNG', 'AM18HAS.JPG', 'BM18HAS.JPG', 'AM18HAS.PNG', 'BM18HAS.PNG', 'AM18NES.PNG', 'AM19ANS.PNG', 'BM19HAS.JPG', 'AM19HAS.JPG', 'AM19HAS.PNG', 'BM19HAS.PNG', 'AM20ANS.PNG', 'BM20HAS.JPG', 'AM20HAS.JPG', 'AM20HAS.PNG', 'BM20HAS.PNG', 'BM21ANS.PNG', 'AM21ANS.PNG', 'BM21HAS.JPG', 'AM21HAS.JPG', 'AM21HAS.PNG', 'BM21HAS.PNG', 'AM21NES.PNG', 'BM21NES.PNG', 'AM22ANS.PNG', 'BM22ANS.PNG', 'BM22HAS.JPG', 'AM22HAS.JPG', 'AM22HAS.PNG', 'BM22HAS.PNG', 'AM22NES.PNG', 'BM22NES.PNG', 'AM23ANS.PNG', 'BM23ANS.PNG', 'AM23HAS.JPG', 'BM23HAS.JPG', 'AM23HAS.PNG', 'BM23HAS.PNG', 'AM23NES.PNG', 'BM23NES.PNG', 'AM24ANS.PNG', 'BM24ANS.PNG', 'BM24HAS.JPG', 'AM24HAS.JPG', 'AM24HAS.PNG', 'BM24HAS.PNG', 'BM24NES.PNG', 'BM25ANS.PNG', 'AM25ANS.PNG', 'AM25HAS.JPG', 'BM25HAS.JPG', 'AM25HAS.PNG', 'BM25HAS.PNG', 'AM25NES.PNG', 'BM25NES.PNG', 'AM26ANS.PNG', 'BM26ANS.PNG', 'BM26HAS.JPG', 'AM26HAS.JPG', 'BM26HAS.PNG', 'AM26HAS.PNG', 'AM26NES.PNG', 'BM26NES.PNG', 'BM27ANS.PNG', 'AM27ANS.PNG', 'AM27HAS.JPG', 'BM27HAS.JPG', 'AM27HAS.PNG', 'BM27HAS.PNG', 'BM27NES.PNG', 'AM27NES.PNG', 'BM28ANS.PNG', 'AM28ANS.PNG', 'BM28HAS.JPG', 'BM28HAS.PNG', 'BM28NES.PNG', 'AM28NES.PNG', 'AM29ANS.PNG', 'BM29ANS.PNG', 'AM29HAS.JPG', 'BM29HAS.JPG', 'BM29HAS.PNG', 'AM29HAS.PNG', 'AM29NES.PNG', 'BM30ANS.PNG', 'AM30ANS.PNG', 'BM30HAS.JPG', 'AM30HAS.JPG', 'BM30HAS.PNG', 'AM30HAS.PNG', 'AM30NES.PNG', 'BM30NES.PNG', 'BM31ANS.PNG', 'AM31ANS.PNG', 'AM31HAS.JPG', 'BM31HAS.JPG', 'AM31HAS.PNG', 'BM31HAS.PNG', 'BM31NES.PNG', 'AM31NES.PNG', 'AM32ANS.PNG', 'BM32ANS.PNG', 'BM32HAS.JPG', 'AM32HAS.JPG', 'BM32HAS.PNG', 'AM32HAS.PNG', 'AM32NES.PNG', 'BM32NES.PNG', 'AM33ANS.PNG', 'BM33ANS.PNG', 'AM33HAS.JPG', 'BM33HAS.JPG', 'BM33HAS.PNG', 'AM33HAS.PNG', 'AM33NES.PNG', 'BM33NES.PNG', 'BM34ANS.PNG', 'AM34ANS.PNG', 'BM34HAS.JPG', 'AM34HAS.JPG', 'AM34HAS.PNG', 'BM34HAS.PNG', 'BM34NES.PNG', 'AM34NES.PNG', 'AM35ANS.PNG', 'BM35ANS.PNG', 'BM35HAS.JPG', 'AM35HAS.JPG', 'BM35HAS.PNG', 'AM35HAS.PNG', 'BM35NES.PNG', 'AM35NES.PNG']

            const WIDTH = 500;
            const HEIGHT = 125 * 4;
            const height = 140;
            const width = 562 * height / 762;
            const num_total = 20;
            var num_neutral = num_total - trial.num_emotional;
            var image_drawn = false;
            // first clear the display element (because the render_on_canvas method appends to display_element instead of overwriting it with .innerHTML)
            if (display_element.hasChildNodes()) {
                // can't loop through child list because the list will be modified by .removeChild()
                while (display_element.firstChild) {
                    display_element.removeChild(display_element.firstChild);
                }
            }
            // create canvas element and image
            var canvas = document.createElement("canvas");
            canvas.id = "jspsych-image-keyboard-response-stimulus";
            canvas.style.margin = "0";
            canvas.style.padding = "0";
            // canvas.style['background-color'] = '#8c8267'
            canvas.style['background-color'] = '#ffffff'
            canvas.height = HEIGHT;
            canvas.width = WIDTH;
            var ctx = canvas.getContext("2d");
            var positions = new Array();
            const grid_x=5, grid_y=4;
            const jitter_x=10, jitter_y=5;
            for (var i=0; i<grid_x; i++) {
                for (var j=0; j<grid_y; j++) {
                    positions.push([i*WIDTH / grid_x + jitter_x * (Math.random()-0.5) * 2,j * HEIGHT / grid_y + jitter_y*(Math.random()-0.5)*2]);
                }
            }
 
            
            //////////
            
            var ids = Array();
            for (var i=0;i<35;i++)
                ids.push(i+1);
	          var sexs = Array();
            for (var i = 0; i < num_total; i++)
            sexs.push(trial.gender ? 'F' : 'M');
	      		var is_emotional = Array();
		      	for (var i=0;i<num_total;i++) {
			    is_emotional.push(i<num_neutral)
            }
		    

            
            is_emotional = jsPsych.randomization.shuffle(is_emotional);
            ids = jsPsych.randomization.shuffle(ids);
	

            var k = 0;
            var skipped = 0;
            while (k<num_total) {
                function newImage(num, skipped) {
                    var img = new Image();
                    var rndnum = String(ids[num+skipped]).padStart(2, "0");
                    var name;
                    if (is_emotional[num])
                        name = sexs[num] + rndnum + 'NES.PNG';
                    else {
                        if (trial.happy_faces)
                            name =  sexs[num] + rndnum + 'HAS.PNG';
                        else
                            name = sexs[num] + rndnum + 'ANS.PNG';
                    }
                    var candidates = IMAGE_NAMES.filter(fn => fn.endsWith(name));
                    if (candidates.length == 0) {
                        return false;
                    } else if (candidates.length == 1) {
                        name = candidates[0];
                    } else {
                        name = jsPsych.randomization.shuffle(candidates)[0];
                    }
                    img.src = 'img/' + name;
                    // add canvas and draw image
                    display_element.insertBefore(canvas, null);
                    if (img.complete) {
                        ctx.drawImage(img, positions[num][0], positions[num][1], width, img.height / img.width * width);
                    } else {
                        img.onload = () => {
                            console.log('onload');
                            ctx.drawImage(img, positions[num][0], positions[num][1], img.width, img.height / img.width * width);
                        };
                    }
                    return true;
                }
                if (newImage(k, skipped)) {
                    k++;
                } else {
                    skipped++;
                }
            }
            // store response
            var response = {
                rt: null,
                key: null,
            };
            // function to end trial when it is time
            const end_trial = () => {
                // kill any remaining setTimeout handlers
                this.jsPsych.pluginAPI.clearAllTimeouts();
                // kill keyboard listeners
                if (typeof keyboardListener !== "undefined") {
                    this.jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
                }
                // gather the data to store for the trial
                var true_response = trial.num_emotional < 10 ? 's' : 'k';
                var trial_data = {
                    rt: response.rt,
                    num_emotional: trial.num_emotional,
                    happy_faces: trial.happy_faces,
                    gender:trial.gender,
                    response: response.key,
                    true_response: true_response,
                    correct: response.key == true_response,
                };
                // clear the display
                display_element.innerHTML = "";
                // move on to the next trial
                this.jsPsych.finishTrial(trial_data);
            };
            // function to handle responses by the subject
            var after_response = (info) => {
                // after a valid response, the stimulus will have the CSS class 'responded'
                // which can be used to provide visual feedback that a response was recorded
                display_element.querySelector("#jspsych-image-keyboard-response-stimulus").className +=
                    " responded";
                // only record the first response
                if (response.key == null) {
                    response = info;
                }
                if (trial.response_ends_trial) {
                    end_trial();
                }
            };
            
               // start the response listener
            if (trial.choices != "NO_KEYS") {
                var keyboardListener = this.jsPsych.pluginAPI.getKeyboardResponse({
                    callback_function: after_response,
                    valid_responses: trial.choices,
                    rt_method: "performance",
                    persist: false,
                    allow_held_key: false,
                });
            }
            // end trial if trial_duration is set
            if (trial.trial_duration !== null) {
                this.jsPsych.pluginAPI.setTimeout(() => {
                    end_trial();
                }, trial.trial_duration);
            }
            else if (trial.response_ends_trial === false) {
                console.warn("The experiment may be deadlocked. Try setting a trial duration or set response_ends_trial to true.");
            }
        }
    }
    MoodOfCrowdResponsePlugin.info = info;

    return MoodOfCrowdResponsePlugin;

})(jsPsychModule);