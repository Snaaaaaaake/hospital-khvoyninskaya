import tableData from '../constants/vaccinationsChildren';

function tableCreator(tableElement, tableColumns) {
  tableData.forEach((trData) => {
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    if (trData.title) {
      th.textContent = trData.title;
    } else {
      th.classList.add('table__th_span');
    }
    if (trData.spanY) {
      th.classList.add('table__th_span');
    }
    tr.appendChild(th);

    const trCells = trData.content;
    let cellIndex = 0;
    for (let tabIndex = 0; tabIndex < tableColumns - 1; tabIndex += 1) {
      const td = document.createElement('td');
      const cellData = trCells[cellIndex];
      if (cellData && tabIndex === cellData.index) {
        td.textContent = cellData.text;
        td.classList.add(cellData.style);
        if (cellData.spanX) {
          td.setAttribute('colspan', cellData.spanX);
          tabIndex += cellData.spanX - 1;
        }
        if (cellData.spanY) {
          td.setAttribute('rowspan', cellData.spanY);
        }
        cellIndex += 1;
      }
      tr.appendChild(td);
    }
    tableElement.appendChild(tr);
  });
}

export default tableCreator;
