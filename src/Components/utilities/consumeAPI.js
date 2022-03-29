


export const consumeAPI = function (stringURL) {
    return fetch(stringURL)
    .then(response => response.json())
    .catch(error => console.log(`The error was: ${error}`))
  }