let table = document.getElementById('table');
let index = document.getElementById('nilai').cellIndex;


// LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
for (i = 1; i < table.rows.length; i++) {

    // GET THE CELLS COLLECTION OF THE CURRENT ROW.
    let objCells = table.rows.item(i).cells;

    // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
    for (let j = index; j <= index; j++) {
    	if ( parseInt(objCells.item(j).innerHTML) < 10 ) {
    		let td = document.createElement("td");
    		td.innerText = "E";
    		table.rows.item(i).appendChild(td);
    	}
    	else if ( parseInt(objCells.item(j).innerHTML) >= 10 && parseInt(objCells.item(j).innerHTML) < 40  ) {
    		let td = document.createElement("td");
    		td.innerText = "D";
    		table.rows.item(i).appendChild(td);
    	}
    	else if ( parseInt(objCells.item(j).innerHTML) >= 40 && parseInt(objCells.item(j).innerHTML) < 50  ) {
    		let td = document.createElement("td");
    		td.innerText = "C";
    		table.rows.item(i).appendChild(td);
    	}
    	else if ( parseInt(objCells.item(j).innerHTML) >= 50 && parseInt(objCells.item(j).innerHTML) < 60  ) {
    		let td = document.createElement("td");
    		td.innerText = "BC";
    		table.rows.item(i).appendChild(td);
    	}
    	else if ( parseInt(objCells.item(j).innerHTML) >= 60 && parseInt(objCells.item(j).innerHTML) < 70  ) {
    		let td = document.createElement("td");
    		td.innerText = "B";
    		table.rows.item(i).appendChild(td);
    	}
    	else if ( parseInt(objCells.item(j).innerHTML) >= 70 && parseInt(objCells.item(j).innerHTML) < 80  ) {
    		let td = document.createElement("td");
    		td.innerText = "AB";
    		table.rows.item(i).appendChild(td);
    	}
    	else if ( parseInt(objCells.item(j).innerHTML) >= 80 ) {
    		let td = document.createElement("td");
    		td.innerText = "A";
    		table.rows.item(i).appendChild(td);
    	}
    }
}