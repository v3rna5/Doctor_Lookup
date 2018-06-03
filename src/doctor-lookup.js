class BetterDoctor{
  constructor(){}

  doctorCall(Name, Condition){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${Name}&query=${Condition}&location=47.6062%2C-122.3321%2C25&user_location=47.6062%2C-122.3321&sort=best-match-asc&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
      request.onload = function(){
        if(this.status === 200){
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
export {BetterDoctor}
