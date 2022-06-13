import axios from 'axios';

function getCientificas () {
  return axios
      .get('http://localhost:8000/api/cientificas/listado/')
      .then(response => {
        return response.data;
      })
      .catch(error => console.error(error));
}

function addCientifica (cientifica) {
  console.log('post - ',cientifica);
  let form_data = new FormData();
  if(cientifica.foto) {
    form_data.append('foto', cientifica.foto, cientifica.foto.name)
  }
  form_data.append('nombre', cientifica.nombre);
  form_data.append('fecha_nacimiento', cientifica.fecha_nacimiento);
  form_data.append('nacionalidad', cientifica.nacionalidad);
  form_data.append('descripcion', cientifica.descripcion);
  return axios
    .post(
      'http://localhost:8000/api/cientificas/listado/',
      form_data,{
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
    )
    .then(response => {
      console.log(response);
    })
    .catch(error => console.error(error));
}

function deleteCientifica (id) {
  return axios
    .delete(`http://localhost:8000/api/cientificas/listado/${id}/`)
    .then(response => {
      console.log('deleted', response);
    })
    .catch(error => console.error(error));
}

function modifyCientifica(cientifica){
  console.log('put - ',cientifica);
  let form_data = new FormData();
  if(cientifica.foto) {
    form_data.append('foto', cientifica.foto, cientifica.foto.name)
  }
  form_data.append('nombre', cientifica.nombre);
  form_data.append('fecha_nacimiento', cientifica.fecha_nacimiento);
  form_data.append('nacionalidad', cientifica.nacionalidad);
  form_data.append('descripcion', cientifica.descripcion);
  return axios
      .put(
        `http://localhost:8000/api/cientificas/listado/${cientifica.id}/`,
        form_data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      .then(response => {
        console.log('put', response);
      })
      .catch(error => console.error(error));; 
}

export {
  getCientificas, 
  addCientifica,
  deleteCientifica,
  modifyCientifica
}
