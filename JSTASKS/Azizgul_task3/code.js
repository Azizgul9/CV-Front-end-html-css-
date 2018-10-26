var status = function (response) {
  if (response.status !== 200) {
    return Promise.reject(new Error(response.statusText))
  }
  return Promise.resolve(response)
}
var txt = function (response) {
  return response.text()
}

fetch('http://46.101.146.101:8081/categories/', {
})
  .then(status)
  .then(txt)
  .then(function (data) {
    document.querySelector('body').innerHTML ="data: "+data;
  })
  .catch(function (error) {
    console.log('error', error)
  })