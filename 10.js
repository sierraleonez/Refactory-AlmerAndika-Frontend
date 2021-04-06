// 10. Rest API

// Fetch data from `https://jsonplaceholder.typicode.com/posts` and `https://jsonplaceholder.typicode.com/users`. Then combine `posts` and `users` based on `userId`.

async function fetchPost() {
  // Variable Declaration
  const postUrl = `https://jsonplaceholder.typicode.com/posts`;
  const userUrl = `https://jsonplaceholder.typicode.com/users`;

  // Get the post data
  let postData = await axios({
    method: "GET",
    url: postUrl,
  })
    .then((e) => e)
    .catch((err) => err);

  // Get user data
  const userData = await axios({
    method: "GET",
    url: userUrl,
  })
    .then((e) => e)
    .catch((err) => err);

  // Assign user to post according to user id
  for (let i = 0; i < userData.data.length; i++) {
    for (let j = 0; j < postData.data.length; j++) {
      // Conditional : if post data user id matches user data id, assign the user to postData according to user id
      if (userData.data[i].id == postData.data[j].userId) {
        postData.data[j].user = userData.data[i];
      }
    }
  }
  console.log(postData.data);
}

fetchPost();
