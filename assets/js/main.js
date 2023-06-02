'use strict';

function backToTop() {
	const backTop = document.getElementById("btnTop");

	function btnToTop() {
		document.documentElement.scrollTop = 0;
	}

	backTop.addEventListener("click", btnToTop);
}

function showImage() {
	const images = document.querySelectorAll('.images .image img');
	const gallery = document.querySelector('.gallery');
	const galleryContainer = document.querySelector('.gallery-container');
	const galleryImg = document.querySelector('.gallery-inner img');
	const close = document.querySelector('.gallery .close');

	const prev = document.querySelector('.control.prev');
	const next = document.querySelector('.control.next');

	let currentIndex = 0;

	images.forEach((image, index) => {
		image.addEventListener('click', () => {
			currentIndex = index;
			showGallery();
		})
	})

	function showGallery() {
		currentIndex == images.lenght - 1 ? next.classList.add('hidden') : next.classList.remove('hidden')

		currentIndex == 0 ? prev.classList.add('hidden') : prev.classList.remove('hidden')

		gallery.classList.add('show')

		galleryImg.src = images[currentIndex].src;

		document.getElementsByTagName(body).classList.add('overflow-hidden');
	}

	function closeGallery() {
		gallery.classList.remove('show')
		document.getElementsByTagName(body).classList.remove('overflow-hidden');
	}

	close.addEventListener('click', () => {
		closeGallery()
	})

	gallery.addEventListener('click', () => {
		closeGallery()
	})

	galleryContainer.addEventListener('click', (e) => {
		e.stopPropagation()
	})

	next.addEventListener('click', (e) => {
		currentIndex != images.lenght - 1 ? currentIndex++ : undefined;
		e.stopPropagation()
		showGallery();
	})

	prev.addEventListener('click', () => {
		currentIndex != 0 ? currentIndex-- : undefined;
		e.stopPropagation()
		showGallery();
	})

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			closeGallery()
		}
	})

}

document.addEventListener('DOMContentLoaded', function () {
	backToTop();
	// showImage();
});