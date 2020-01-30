function http() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}

const myHttp = http();

// myHttp.get(
//   'https://jsonplaceholder.typicode.com/posts',
//   (err, res) => {
//     if (err) {
//       console.log('error', res);
//       return;
//     }
//     myHttp.get(
//       'https://jsonplaceholder.typicode.com/comments?postId=1',
//       (err, res) => {
//         if (err) {
//           console.log('error', res);
//           return;
//         }
//         myHttp.get(
//           'https://jsonplaceholder.typicode.com/users/1',
//           (err, res) => {
//             if (err) {
//               console.log('error', res);
//               return;
//             }
//             console.log('фініш');
//           },
//         );
//       },
//     );
//   },
// );

// Функція, що отримує пост з відповідним id
function getPost(id) {
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

// Функція, що отримує коментарі до вищеотриманого поста
function getPostComments(post) {
  const {
    id
  } = post;
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve({
          post,
          comments: res
        });
      })
  });
}

// Функція, що отримує інформацю про юзерів, які написали коменти
function getUserCreatedPost(data) {
  const {
    post: {
      userId
    },
  } = data;
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve({
          ...data,
          user: res
        });
      })
  });
}

getPost(36)
  .then(post => getPostComments(post))
  .then(data => getUserCreatedPost(data))
  .then(fullData => console.log(fullData))
  .catch(err => console.log(err))
  .finally(() => console.log('finally'));