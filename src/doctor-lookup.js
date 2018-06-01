
export function apiCallKeyword(inputKeyword, apiKey, addKeywordToPage) {
  let promise = new Promise(function(resolve, reject){
  let request = new XMLHttpRequest();
  let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${inputKeyword}&location=47.620422,‎-122.349358,100&skip=0&limit=50&user_key=${apiKey}`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
    let keywordInfo = JSON.parse(response);
    addKeywordToPage(keywordInfo);
    setTimeout(function() {
      $(".search-again").show();
    }, 4000);
  });
}
