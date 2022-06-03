import { useState, useEffect, useRef } from 'react';
import {getCientificas, postCientifica} from './services/helper'

import Card from './components/Card';

import './App.css';

function App() {

	const cientifica = {};
	const addCientificaModalRef = useRef(null);

  const [cientificas, setCientificas] = useState([]);
  const [showModal, setShowModal] = useState(false);
	const [dataJson, setDataJson] = useState({});

  const getCientificasData = () => {
    getCientificas().then(response => {
      console.log(response);
      setCientificas(response)
    })
  }

  const addCientifica = () => {
    postCientifica(cientifica).then(response => {
      console.log('clicking - ',response);
    })
  }

	const onBlurInput = (e) => {
		cientifica[e.target.id] = e.target.value;
	}

  useEffect(() => {
    getCientificasData();
  }, []);

  return (
    <div className="container-fluid mt-5 px-5">
      <section className="main-header">
        <h1>Mujeres en tecnología y ciencia.</h1>
        <div className="row">
          <div className="col-md-6">
            General description
          </div>
          <div className="col-md-6">
            <button className="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Agregar</button>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          {
            cientificas.map((cientifica, index) => {
              return <Card 
                imageName={cientifica.foto}  
                name={cientifica.nombre} 
                resume={cientifica.descripcion} 
                id={cientifica.id}
                key={`${cientifica.nombre}-${cientifica.id}`}
              />
            })
          }
        </div>        
      </section>

      {/* Modal to add cientifica */}
			<div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="staticBackdropLabel">Agregar Cientifica</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<form>
								<div className="mb-3">
									<label htmlFor="nombre" className="form-label">Nombre Cientifica</label>
									<input type="text" className="form-control" id="nombre" onBlur={onBlurInput}/>
								</div>
								<div className="mb-3">
									<label htmlFor="fecha_nacimiento" className="form-label">Fecha Nacimiento</label>
									<input type="date" className="form-control" id="fecha_nacimiento" onBlur={onBlurInput}/>
								</div>
								<div className="mb-3">
									<label htmlFor="nacionalidad" className="form-label">Nacionalidad</label>
									<input type="text" className="form-control" id="nacionalidad" onBlur={onBlurInput}/>
								</div>
								<div className="mb-3">
									<label htmlFor="foto" className="form-label">Foto</label>
									<input type="file" className="form-control" id="foto" onBlur={onBlurInput}/>
								</div>
								<div className="mb-3">
									<label htmlFor="descripcion" className="form-label">Descripción</label>
									<textarea className="form-control" id="descripcion" rows={5} onBlur={onBlurInput}/>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary" onClick={addCientifica}>Understood</button>
						</div>
					</div>
				</div>
			</div>
    </div>
  );
}

export default App;
