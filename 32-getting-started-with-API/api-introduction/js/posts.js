// 32-6 Load Posts And Display On The Website With Css
// load data
const loadPost = () => {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((res) => res.json())
		.then((posts) => displayPosts(posts));
};
loadPost();

// display posts
const postContainer = document.getElementById('posts');
const displayPosts = (posts) => {
	console.log(posts);
	const getPosts = posts.map((post) => {
		// console.log(post.title);
		const { title, body, userId, id } = post;
		const postDiv = document.createElement('div');
		postDiv.classList.add('post');
		postDiv.innerHTML = `
        <h3>Title : ${title}</h3>
        <p>Description : ${body}</p>
        `;
		postContainer.style.backgroundColor = 'lightgray';
		postContainer.style.padding = '10px';
		postContainer.appendChild(postDiv);
		// style
		// postDiv.style.color = 'blue';
		// postDiv.style.backgroundColor = 'lightblue';
		// postDiv.style.padding = '10px';
		// postDiv.style.margin = '10px';
		// postDiv.style.borderRadius = '5px';
	});
	getPosts;
};

// 32-7 Get, Post, Patch, Delete, Crud, Get Vs Post
// add post

const addPosts = () => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
			title: 'My New Post',
			body: 'This my first post! very excited',
			userId: 101,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((res) => res.json())
		.then((data) => console.log(data));
};
addPosts();
