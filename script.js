// Add animation to notch
const notch = document.querySelector('.notch');
notch.addEventListener('mouseover', () => {
	notch.classList.add('animate');
});

notch.addEventListener('mouseout', () => {
	notch.classList.remove('animate');
});

// Add animation to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('mouseover', () => {
		button.classList.add('animate');
	});
	button.addEventListener('mouseout', () => {
		button.classList.remove('animate');
	});
});

// Toggle dark mode
const darkModeBtn = document.querySelector('.dark-mode-btn');
darkModeBtn.addEventListener('mouseover', () => {
	darkModeBtn.classList.add('pulse');
});

darkModeBtn.addEventListener('mouseout', () => {
	darkModeBtn.classList.remove('pulse');
	darkModeBtn.classList.add('unpulse');
	setTimeout(() => {
		darkModeBtn.classList.remove('unpulse');
	}, 1000);
});

darkModeBtn.addEventListener('click', () => {
	document.body.classList.toggle('dark-mode');
	document.body.style.backgroundColor = document.body.classList.contains('dark-mode') ? '#333' : '#f2f2f2';
});
