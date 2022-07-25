
$.ajax({
  type: 'POST',
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  url: 'https://dev.iw233.cn/api.php?sort=random&type=json&num=40',
  timeout: 10000,
  success: function(data) {
      const pics = data.pic
      for (let index = 0; index < pics.length; index++) {
        const element = document.getElementById('pic' + (index + 1));
        if (element) element.src = pics[index]
      }
  },
  error: function(a, b, c) {
      console.log(a)
      console.log(b)
      console.log(c)
  }
})
