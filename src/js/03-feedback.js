
import throttle from 'lodash.throttle'

const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const form = document.querySelector('form');

const KEY = "feedback-form-state";

let throt_fun = throttle(handlValue, 500);

input.addEventListener("input", throt_fun);
textarea.addEventListener("input", throt_fun);
form.addEventListener("submit", handlSubmit);
const obj = {};
function handlValue() {
    console.log(input.value)
    console.log(textarea.value)

    obj.inputValue = input.value;
    obj.textareaValue = textarea.value;
        localStorage.setItem(KEY, JSON.stringify(obj));
}

const getItem = JSON.parse(localStorage.getItem(KEY));

if (getItem) {
    input.value = getItem.inputValue;
    textarea.value = getItem.textareaValue;
}
function handlSubmit(evt) {
    evt.preventDefault();
    localStorage.removeItem(KEY);
    obj.inputValue = input.value;
    obj.textareaValue = textarea.value;
    console.log(obj);
    form.reset();
}
