const checkUsername = () => {
	if(username.value.length < 5){
		feedbackMsg.className = 'warning';
		feedbackMsg.textContent = 'Not long enough, yet...';
	} else {
		feedbackMsg.textContent = '';
	}
}

const usernameTip = () => {
	feedbackMsg.className = 'tip';
	feedbackMsg.textContent = 'Username must be at least 5 characters.';
}

const feedbackMsg = document.getElementById('feedback');
const username = document.getElementById('username');

username.addEventListener('focus', usernameTip, false);
username.addEventListener('blur', checkUsername, false);

const systemMaintenance = (e) => {
	e.preventDefault();

	let msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
	msg += '<div><h2>System Maintenance</h2>';
	msg += 'Our servers are being updated between 3 and 4 a.m. ';
	msg += 'During this time, there may be minor disruptions to service.</div>';

	let note = document.createElement('div');
	note.setAttribute('id', 'note');
	note.innerHTML = msg;

	note.addEventListener('click', dismissNote, false);
	document.body.appendChild(note);
}

const form = document.querySelector('form');
form.addEventListener('submit', systemMaintenance, false);

// Ask Kelly how to get this to work -- curently says cannot read property 'addEventListener' on null -- because the div hasnt been added to the document yet so how do we account for things later added dynamically?
const dismissNote = (e) => {
	e.preventDefault();

	if(e.target.id === 'close'){
		const note = document.getElementById('note');
		document.body.removeChild(note);
	}
}

// this doesnt work?







