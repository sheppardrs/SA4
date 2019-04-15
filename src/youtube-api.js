import axios from 'axios';

const API_URL = 'https://www.googleapis.com/youtube/v3/search';
// const API_URL = 'https://www.googleapis.com/youtube/v3/search/AIzaSyDR8gZDCj8be9LpAKGktmlxmwT_syDf_3Y';
// const API_KEY = 'AIzaSyD1d3KVeh9nvAms5tmauNcd9olL8QQcgXg';
// const API_KEY = 'AIzaSyDR8gZDCj8be9LpAKGktmlxmwT_syDf_3Y';
const API_KEY = 'AIzaSyCut3IUTjN2ViPVLeHdxQM8o5Vrf8pNjCU';

const youtubeSearch = (term) => {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video',
  };
  console.log(API_URL);
  console.log(params);

  return new Promise((resolve, reject) => {
    axios.get(API_URL, { params })
      .then((response) => {
        resolve(response.data.items);
      })
      .catch((error) => {
        console.log(`youtube api error: ${error}`);
        console.log(error);
        console.log(error.errors);
        reject(error);
      });
  });
};

export default youtubeSearch;
