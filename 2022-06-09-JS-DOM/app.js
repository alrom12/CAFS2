const btn = document.querySelector('button');
const write = document.querySelector('input:first-child');
const read = document.getElementById("read");

if (btn) {
    btn?.addEventListener('click', getValueFromInput)
}

function getValueFromInput (event) {
    console.log(write.value);
    read?.value = write?.value;
}