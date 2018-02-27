const authorsList = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';

const createNode = (element) => {
	return document.createElement(element);
}

const append = (parent, el) => {
	return parent.appendChild(el);
}

fetch(url)
	.then(response => response.json())

	.then(function(data){
		let authors = data.results;
		console.log(authors);
		authors.forEach(author => {
			let li = createNode('li'),
				img = createNode('img'),
				span = createNode('span');
			img.src = author.picture.medium;
			span.innerHTML = `${author.name.first} ${author.name.last}`;
			append(li, img);
			append(li, span);
			append(authorsList, li);
		})
	})
	.catch(function(error){
		console.log(error);
	})



// // Ask Kelly how would we POST?
// let data = {
//     name: 'Sara'
// }
// // Create our request constructor with all the parameters we need
// var request = new Request(url, {
//     method: 'POST', 
//     body: data, 
//     headers: new Headers()
// });

// fetch(request)
// 	.then(function() {
// 	    // Handle response we get from the API
// 	})