let wrap = document.querySelector('.wrap');

window.addEventListener('load', setGrid());

function setGrid(size = 16) {
	console.log(wrap);
	wrap.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	for (let i = 0; i < size * size; i++) {
		let div = document.createElement('div');
		div.classList.add('item');
		console.log(div);
		wrap.append(div);
	}
}
