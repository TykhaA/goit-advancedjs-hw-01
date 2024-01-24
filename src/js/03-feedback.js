
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

    obj.email = input.value;
    obj.message = textarea.value;
        localStorage.setItem(KEY, JSON.stringify(obj));
}

const getItem = JSON.parse(localStorage.getItem(KEY));

if (getItem) {
    input.value = getItem.email;
    textarea.value = getItem.message;
}
function handlSubmit(evt) {
    evt.preventDefault();
    if (!input.value.trim().length || !textarea.value.trim().length) return;
    localStorage.removeItem(KEY);
    obj.email = input.value;
    obj.message = textarea.value;
    console.log(obj);
    form.reset();
}
