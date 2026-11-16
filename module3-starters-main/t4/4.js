'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
for (let i = 0; i < students.length; i++) {
  const d = document.createElement("option")
  d.value = students[i].id
  d.textContext = students[i].name
  document.getElementById("target").appendChild(d)
}