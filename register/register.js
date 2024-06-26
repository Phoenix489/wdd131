import { successTemplate, participantTemplate } from './templates.js';

document.addEventListener('DOMContentLoaded', function () {
    let participantCount = 1;

    function submitForm(event) {
        event.preventDefault();
        
        const info = {
            name: document.querySelector("#adult_name").value,
            participant: participantCount,
            fee: totalFees(),
        }

        document.querySelector("form").style.display = "none";

        document.getElementById("summary").innerHTML = successTemplate(info);

        }

    function totalFees() {
        // the selector below lets us grab any element that has an id that begins with "fee"
        let feeElements = document.querySelectorAll("[id^=fee]");
        console.log(feeElements);
        // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
        // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
        // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
        feeElements = [...feeElements];
        // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
        // Remember that the text that was entered into the input element will be found in the .value of the element.
        let total = feeElements.reduce((sum, feeElement) => {
            return sum + (parseFloat(feeElement.value) || 0);
        }, 0);
        
        return total;
    }
    
    document.getElementById('add').addEventListener('click', function () {
        participantCount += 1;
        const newParticipantHTML = participantTemplate(participantCount);
        document.getElementById('add').insertAdjacentHTML('beforebegin', newParticipantHTML);

        if (participantCount === 2) {
            document.querySelector('.participant1').classList.remove('participant1');
        }
    });


    document.querySelector("form").addEventListener("submit", submitForm)
});