let wrap = document.querySelector('.wrap');
let reset = document.querySelector('.reset');
let resize = document.querySelector('.resize');
let defaultSize = 16;

window.addEventListener('load', setGrid(defaultSize, colorBlack));
reset.addEventListener('click', clearGrid);
resize.addEventListener('click', resizeGrid);

function setGrid(size = defaultSize, colorStyle) {
	console.log(wrap);
	wrap.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	for (let i = 0; i < size * size; i++) {
		let div = document.createElement('div');
		div.classList.add('item');
		div.addEventListener('mouseenter', colorStyle);
		wrap.append(div);
	}
}

function resizeGrid(size) {
	removeGrid();
	size = parseInt(prompt('Enter new size X for grid X by X:'));
	if (size < 1 || size > 100) {
		alert('Please enter a size between 1 - 100!');
		resizeGrid();
		return;
	}
	defaultSize = size;
	if (selector.value == 'white') {
		removeGrid();
		setGrid(defaultSize, colorWhite);
	} else if (selector.value == 'black') {
		removeGrid();
		setGrid(defaultSize, colorBlack);
	} else if ((selector.value = 'RGB')) {
		removeGrid();
		setGrid(defaultSize, colorRGB);
	}
}

let selector = document.querySelector('.coloring');
selector.addEventListener('change', function () {
	if (this.value == 'white') {
		removeGrid();
		setGrid(defaultSize, colorWhite);
	} else if (this.value == 'black') {
		removeGrid();
		setGrid(defaultSize, colorBlack);
	} else if ((this.value = 'RGB')) {
		removeGrid();
		setGrid(defaultSize, colorRGB);
	}
});

function colorBlack() {
	this.style.backgroundColor = 'black';
}

function colorWhite() {
	this.style.backgroundColor = 'white';
}

function colorRGB() {
	let red = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function clearGrid() {
	let childs = [...wrap.children];
	childs.forEach(function (element) {
		element.style.backgroundColor = 'rgb(189, 189, 189)';
	});
}

function removeGrid() {
	let childs = [...wrap.children];
	childs.forEach((el) => el.remove());
}
