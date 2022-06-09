// function submit() {
//     let age = document.getElementById("form").value;
//     console.log(age);
//   }
// form.addEventListener('click', submit);


console.log(document.getElementById('age-table').childNodes);
console.log('getElementById = age-table');
console.log(document.getElementById('age-table'));
console.log('querySelector');
console.log(document.querySelector('#age-table'));

console.log('getElementsByName = age');
console.log(document.getElementsByName('age'));
console.log('querySelectorAll All');
console.log(document.querySelectorAll('#age'));

let labels = document.getElementsByTagName('label');
console.log('getElementsByTagName = label');
console.log(labels);
console.log('for loop');
for (let l of labels) {
  console.log(l);
}
if (labels > 0) {
    // console.log('destructure array', Array.from(labels).filter(e => e.parentNode.nodeName == 'TD'));
    console.log('destructure', Array.from(labels));
}

let table = document.getElementById('age-table');
if (table) {
    let labelsFromTable = table.getElementsByTagName('label');
    console.log(labelsFromTable);
}