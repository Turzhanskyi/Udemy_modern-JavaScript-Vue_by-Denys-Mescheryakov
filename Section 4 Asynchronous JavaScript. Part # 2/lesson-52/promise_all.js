function getPost2(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      })
  });
}

function getPostComments2(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      })
  });
}

function getUserCreatedPost2(userId) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      })
  });
}

Promise.all([getPost2(1), getPostComments2(1), getUserCreatedPost2(1)])
  .then(fulldata => console.log(fulldata), )
  .catch(err1 => console.log(err1));