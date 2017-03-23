var axios = require('axios');

var fetchJobs = function(url){

  return axios.get(url)
 
}

module.exports = fetchJobs;