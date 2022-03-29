


export const consumeAPI = function (stringURL) {
    return fetch(stringURL)
    .then(response => response.json())
    .then(data => {return data})
    .catch(error => console.log(`The error was: ${error}`))
  }