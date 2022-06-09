const btn = document.querySelector('button');
const write = document.querySelector('input:first-child');

if (btn) {
    btn.addEventListener('click', getValueFromInput)
}

function getValueFromInput (event) {
    console.log(write.value);
    document.getElementById("read").value = write.value;
}