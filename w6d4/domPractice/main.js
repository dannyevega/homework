// const checkUsername = () => {
// 	if(username.value.length < 5){
// 		feedbackMsg.className = 'warning';
// 		feedbackMsg.textContent = 'Not long enough, yet...';
// 	} else {
// 		feedbackMsg.textContent = '';
// 	}
// }

// const usernameTip = () => {
// 	feedbackMsg.className = 'tip';
// 	feedbackMsg.textContent = 'Username must be at least 5 characters.';
// }

// const feedbackMsg = document.getElementById('feedback');
// const username = document.getElementById('username');

// username.addEventListener('focus', usernameTip, false);
// username.addEventListener('blur', checkUsername, false);

// const systemMaintenance = (e) => {
// 	e.preventDefault();

// 	let msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
// 	msg += '<div><h2>System Maintenance</h2>';
// 	msg += 'Our servers are being updated between 3 and 4 a.m. ';
// 	msg += 'During this time, there may be minor disruptions to service.</div>';

// 	let note = document.createElement('div');
// 	note.setAttribute('id', 'note');
// 	note.innerHTML = msg;

// 	document.body.appendChild(note);
// 	// have to add eventListener on note when it is created on page -- wouldnt work if we added eventListener outside of this function
// 	note.addEventListener('click', dismissNote, false);
// }

// const dismissNote = (e) => {
// 	e.preventDefault();

// 	if(e.target.id === 'close'){
// 		const note = document.getElementById('note');
// 		document.body.removeChild(note);
// 	}
// }

// const form = document.querySelector('form');
// form.addEventListener('submit', systemMaintenance, false);

let app = document.getElementById('todo-app');

app.addEventListener('click', function(e){
	if(e.target && e.target.nodeName === 'LI'){
		let item = e.target;
		console.log(`you clicked on item: ${item.innerHTML}`);
	}
});







