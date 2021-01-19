let wrap = document.querySelector('.wrap');
let reset = document.querySelector('.reset');

window.addEventListener('load', setGrid(16, colorBlack));
reset.addEventListener('click', clearGrid);

function setGrid(size = 16, colorStyle) {
	console.log(wrap);
	wrap.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	for (let i = 0; i < size * size; i++) {
		let div = document.createElement('div');
		div.classList.add('item');
		div.addEventListener('mouseenter', colorStyle);
		wrap.append(div);
	}
}

let selector = document.querySelector('.coloring');
selector.addEventListener('change', function () {
	if (this.value == 'white') {
		removeGrid();
		setGrid(16, colorWhite);
	} else if (this.value == 'black') {
		removeGrid();
		setGrid(16, colorBlack);
	} else if ((this.value = 'RGB')) {
		removeGrid();
		setGrid(16, colorRGB);
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
