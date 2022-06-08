import { useState, useEffect} from 'react';
import {getCientificas, addCientifica, deleteCientifica, modifyCientifica} from './services/helper'

import Card from './components/Card';
import Modal from './components/Modal';

import './App.css';

function App() {

  const [cientificas, setCientificas] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [initialModalData, setInitialModalData] = useState({})

  const getCientificasData = () => {
    getCientificas().then(response => {
      console.log(response);
      setCientificas(response)
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
			getCientificasData();
		})
	}

	const openEditCientifica = (cientifica) => {
		setIsEditModalOpen(true);
		setInitialModalData(cientifica)
	}

  useEffect(() => {
    getCientificasData();
  }, []);

  return (
    <div className="container-fluid mt-5 px-5">
      <section className="main-header">
        <h1>Mujeres en tecnología y ciencia.</h1>
        <div className="row">
          <div className="col-md-6 col-12">
            General description
          </div>
          <div className="col-md-6 col-12">
            <button className="btn btn-primary float-end" onClick={() => setIsAddModalOpen(true)}>Agregar</button>
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
			<Modal 
				idModal="agregarCientifica" 
				label={'Agregar cientifica'} 
				isOpen={isAddModalOpen} 
				onCancel={() => setIsAddModalOpen(false)} 
				onSave={newCientifica}/> 

			{/* Modal to edit cientifica */}
			<Modal 
				idModal="editarCientifica" 
				label={'Modificar cientifica'} 
				isOpen={isEditModalOpen} 
				initialValue={initialModalData} 
				onCancel={() => setIsEditModalOpen(false)} 
				onSave={editarCientifica}/> 
			
    </div>
  );
}

export default App;
