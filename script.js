const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const priceElements = document.querySelectorAll('.price');
	let total = 0;
	priceElements.forEach((e) => {
		total += parseInt(e.textContent,10);
	});

	const table = document.querySelector('table');

	const newRow = document.createElement('tr');
	const newCell = document.createElement('td');

	newCell.setAttribute('id', 'ans');
	newCell.textContent = total;

	newCell.setAttribute('colspan', '2');

	newRow.appendChild(newCell);
	table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

