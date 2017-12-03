window.onload = createTable;

function createTable() {
	var table = document.createElement("table");
	table.className = "blueTable";
	var row1 = document.createElement("tr");
	var head = table.createTHead();
	var row1col1 = document.createElement("th");
	row1col1.innerHTML = "id";
	var row1col2 = document.createElement("th");
	row1col2.innerHTML = "Item Name";
	var row1col3 = document.createElement("th");
	row1col3.innerHTML = "# In-Stock";
	var row1col4 = document.createElement("th");
	row1col4.innerHTML = "Unit Price";
	var row1col5 = document.createElement("th");
	row1col5.innerHTML = "Sell Price";
	var row1col6 = document.createElement("th");
	row1col6.innerHTML = "Date";
	var row1col7 = document.createElement("th");
	row1col7.innerHTML = "Month";
	var row1col8 = document.createElement("th");
	row1col8.innerHTML = "Year";
	head.appendChild(row1col1);
	head.appendChild(row1col2);
	head.appendChild(row1col3);
	head.appendChild(row1col4);
	head.appendChild(row1col5);
	head.appendChild(row1col6);
	head.appendChild(row1col7);
	head.appendChild(row1col8);
	row1.appendChild(head);
	table.appendChild(row1);
	for(var i = 0; i < products.length; i++) {
		var row = document.createElement("tr");
		table.appendChild(row);
		for(var j = 0; j < 8; j++) {
			var rowcol = document.createElement("th");
			row.appendChild(rowcol);
			var output = document.createElement("input");
			var index;
			switch(j) {
				case 0:
					index = "myId";
					break;
				case 1:
					index = "itemName";
					break;
				case 2:
					index = "itemStorage";
					break;
				case 3:
					index = "itemUnitPrice";
					break;
				case 4:
					index = "itemSellPrice";
					break;
				case 5:
					index = "itemDate";
					break;
				case 6:
					index = "itemMonth";
					break;
				case 7:
					index = "itemYear";
					break;
			}
			output.id = products[i][0] + index;
			output.name = products[i][0] + index;
			output.value = products[i][j];
			output.readOnly = true;
			output.className = "blueTable";
			rowcol.appendChild(output);
		}
	}
	var div = document.getElementById("Product_Panel");
	div.appendChild(table);
}

function edit() {
	for(var i = 0; i < products.length; i++) {
		for(var j = 1; j < 8; j++) {
			var index;
			switch(j) {
				case 1:
					index = "itemName";
					break;
				case 2:
					index = "itemStorage";
					break;
				case 3:
					index = "itemUnitPrice";
					break;
				case 4:
					index = "itemSellPrice";
					break;
				case 5:
					index = "itemDate";
					break;
				case 6:
					index = "itemMonth";
					break;
				case 7:
					index = "itemYear";
					break;
			}
			var output = document.getElementById(products[i][0] + index);
			output.style.backgroundColor = "lightyellow";
			output.removeAttribute("readonly");
		}
	}
}
