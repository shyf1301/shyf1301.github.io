
// $.ajax({
//   type: 'GET',
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Method': 'GET,POST'
//   },
//   url: 'https://dev.iw233.cn/api.php?sort=random&type=json&num=40',
//   timeout: 10000,
//   success: function(data) {
//       const pics = data.pic
//       for (let index = 0; index < pics.length; index++) {
//         const element = document.getElementById('pic' + (index + 1));
//         if (element) element.src = pics[index]
//       }
//   },
//   error: function(a, b, c) {
//       console.log(a)
//       console.log(b)
//       console.log(c)
//   }
// })

const promise = fetch('https://dev.iw233.cn/api.php?sort=random&type=json&num=40', {
  method: "GET",
  headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
  }
})
.then(data => {
  return data.json()
})
.catch(error => {return error})

promise.then(data => {
  const pics = data.pic
  for (let index = 0; index < pics.length; index++) {
    const element = document.getElementById('pic' + (index + 1));
    if (element) element.src = pics[index]
  }
})
