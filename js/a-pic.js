
$.ajax({
  type: 'POST',
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  url: 'http://aqua.iw233.cn/api.php?sort=random',
  timeout: 10000,
  complete: function(a, b, c) {
    console.log(a)
    console.log(b)
    console.log(c)
  },
  success: function(data) {
      console.log(data);
      // const img = document.getElementById('a-pic')
      // console.log(arrayBufferToBase64(data))
      // img.src = 'data:image/jpg;base64,' + data;
  },
  error: function(a, b, c) {
      console.log(a)
      console.log(b)
      console.log(c)
  }
})
