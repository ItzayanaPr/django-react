import axios from 'axios';

function getCientificas () {
  return axios
      .get('http://localhost:8000/api/cientificass/')
      .then(response => {
        console.log('inside axios', response);
        return response.data;
      })
      .catch(error => console.error(error));
}

function postCientifica (cientifica) {
  console.log('post - ',cientifica)
  return axios
    .post(
      'http://localhost:8000/api/cientificass/',
      cientifica
    )
    .then(response => {
      console.log(response);
    })
    .catch(error => console.error(error));
}

function deleteCientifica (id) {
  return axios
    .delete(`http://localhost:8000/api/cientificass/${id}`)
    .then(response => {
      console.log('deleted', response);
    })
    .catch(error => console.error(error));
}

export {
  getCientificas, 
  postCientifica,
  deleteCientifica
}
