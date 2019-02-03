const http = new easyHTTP;

// Get posts

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(posts)
//   }
// });

// Data for post request

const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
}

// Add new post

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(post)
//   }
// });

// Update post

http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
  if(err) {
    console.log(err)
  } else {
    console.log(post)
  }
});