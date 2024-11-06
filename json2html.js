function json2html(data, authorEmail) {
  const table = document.createElement('table');
  table.setAttribute('data-user', authorEmail);

  const headerRow = document.createElement('tr');
  const headerCells = ['Name', 'Age', 'Gender'].map(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    return th;
  });
  headerRow.append(...headerCells);
  table.appendChild(headerRow);

  data.forEach(person => {
    const row = document.createElement('tr');
    const cells = ['Name', 'Age', 'Gender'].map(property => {
      const td = document.createElement('td');
      td.textContent = person[property];
      return td;
    });
    row.append(...cells);
    table.appendChild(row);
  });

  return table.outerHTML;
}

export default json2html;

import json2html from './json2html.js';

const data = [
  { Name: 'Alice', Age: 25, Gender: 'F' },
  { Name: 'Bob', Age: 30, Gender: 'M' },
  { Name: 'Charlie', Age: 35, Gender: 'M' }
];

const authorEmail = 'junaid11hussain22@gmail.com';

const htmlTable = json2html(data, authorEmail);
