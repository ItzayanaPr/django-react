import { useState, useEffect} from 'react';
import {getCientificas, addCientifica, deleteCientifica, modifyCientifica, getAreas} from './services/helper'

import Card from './components/Card';
import Modal from './components/Modal';

import './App.css';

function App() {

  const [cientificas, setCientificas] = useState([]);
  const [areas, setAreas] = useState([]);
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [initialModalData, setInitialModalData] = useState({});

  const getCientificasData = () => {
    getCientificas().then(response => {
      console.log(response);
      setCientificas(response)
    })
  }

	const getAreasData = () => {
		getAreas().then(response => {
      console.log(response);
      setAreas(response)
    })
	}

  const newCientifica = (cientifica) => {
		console.log('add', cientifica)
    addCientifica(cientifica).then((response )=> {
      console.log('adding - ',response);
			setIsAddModalOpen(false);
			getCientificasData();
    })
  }

	const removeCientifica = (id) => {
		deleteCientifica(id).then(response => {
			getCientificasData();
		})
	}

	const editarCientifica = (cientifica) => {
		modifyCientifica(cientifica).then(response => {
			setIsEditModalOpen(false);
			getCientificasData();
		})
	}

	const openEditCientifica = (cientifica) => {
		setIsEditModalOpen(true);
		setInitialModalData(cientifica)
	}

  useEffect(() => {
    getCientificasData();
		getAreasData();
  }, []);

  return (
    <div className="container-fluid mt-5 px-5">
      <section className="main-header">
        <h1>Mujeres en tecnología y ciencia.</h1>
        <div className="row">
          <div className="col-md-6 col-12">
						A lo largo de la historia, mujeres extraordinarias han demostrado con hechos la relevancia del 
						papel de la mujer en la ciencia, dejando un legado muy importante a la humanidad. 
          </div>
          <div className="col-md-6 col-12">
            <button className="btn btn-success float-end mr-2" onClick={() => setIsAddModalOpen(true)}>Agregar</button>
						<button className="btn btn-primary float-end mr-2">Ver areas</button>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
						{
							cientificas.map((cientifica) => {
								return (
									<div className="col-12 col-md-6 col-lg-4" key={`${cientifica.nombre}-${cientifica.id}`}>
										<Card 
											cientifica={cientifica}											
											editAction={openEditCientifica}
											deleteAction={removeCientifica}								
										/>
									</div>)
							})
						}					 
        </div>        
      </section>

      {/* Modal to add cientifica */}
			{
				isAddModalOpen ?
				<Modal 
				idModal="agregarCientifica" 
				label={'Agregar cientifica'} 
				checksArray={areas}
				onCancel={() => setIsAddModalOpen(false)} 
				onSave={newCientifica}/>
				: null
			}

			{/* Modal to edit cientifica */}
			{
				isEditModalOpen ? 
				<Modal 
				idModal="editarCientifica" 
				label={'Modificar cientifica'} 
				checksArray={areas}
				initialValue={initialModalData} 
				onCancel={() => setIsEditModalOpen(false)} 
				onSave={editarCientifica}/> 
				: null
			}			
    </div>
  );
}

export default App;
