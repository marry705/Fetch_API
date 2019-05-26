function app() {
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
