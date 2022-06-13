const btn = document.querySelector('button');
btn?.addEventListener('click', getValueFromInput)

// if (btn) {
//     btn.addEventListener('click', getValueFromInput)
// }

function getValueFromInput (event) {
    const write = document.querySelector('input:first-child');
    const read = document.getElementById("read");
    console.log(write?.value);
    if ((read) && (write)) {
        read.value = write.value;
    }
}