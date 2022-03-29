

export const PostAPI = (url, json) => {
  return fetch(url, {
    method: "POST",
    body: json,
    headers: {
      'Content-Type':'application/json'
    }
  })
  .then(res => {
    return res;
  })
  .catch(error => console.log(error))

}