import axios from 'axios';

async function getCientificas () {
  try {
    const response = await axios
      .get('http://localhost:8000/api/cientificass/');
    console.log('inside axios', response);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
}

async function addCientifica (cientifica) {
  console.log('post - ',cientifica);
  let form_data = new FormData();
  if(cientifica.foto) {
    form_data.append('foto', cientifica.foto, cientifica.foto.name)
  }
  form_data.append('nombre', cientifica.nombre);
  form_data.append('fecha_nacimiento', cientifica.fecha_nacimiento);
  form_data.append('nacionalidad', cientifica.nacionalidad);
  form_data.append('descripcion', cientifica.descripcion);
  try {
    const response = await axios
      .post(
        'http://localhost:8000/api/cientificass/',
        form_data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }

      );
    console.log(response);
  } catch (error) {
    return console.error(error);
  }
}

async function deleteCientifica (id) {
  try {
    const response = await axios
      .delete(`http://localhost:8000/api/cientificass/${id}/`);
    console.log('deleted', response);
  } catch (error) {
    return console.error(error);
  }
}

export {
  getCientificas, 
  addCientifica,
  deleteCientifica
}
