function app() {
  function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then((ansver) => {
        let output = '<h2 class="mb-4">Posts</h2>';
        ansver.forEach((post) => {
          output += `
            <div class="card mb-3">
              <h3>${post.title}</h3>
              <p>${post.body}</p>
            </div>
          `;
        });
        document.getElementById('output').innerHTML = output;
      });
  }

  function getText() {
    fetch('sample.txt')
      .then(res => res.text())
      .then((ansver) => {
        document.getElementById('output').innerHTML = ansver;
      });
  }


  document.getElementById('getText').addEventListener('click', () => {
    getText();
  });
  document.getElementById('getUsers').addEventListener('click', () => {
    getUsers();
  });
  document.getElementById('getPosts').addEventListener('click', () => {
    getPosts();
  });
  document.getElementById('addPost').addEventListener('submit', () => {
    addPost();
  });
}

app();
