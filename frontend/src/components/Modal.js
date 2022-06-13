import {useState} from 'react';
import InputField from './Input';

function Modal({idModal, label, initialValue = {}, onCancel, onSave}) {
  const objectTemp = initialValue;
  const [cientificaObj, setCientificaObj] = useState(initialValue);

  const setValue = (key, value) => {
    objectTemp[key] = value;
  }
  
  const saveData = () => {
    setCientificaObj(objectTemp);
    onSave(objectTemp);
  }

  return (
    <div className="modal fade show d-block" id={idModal} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${idModal}Label`} aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${idModal}Label`}>{label}</h5>
          </div>
          <div className="modal-body">
            <form className="was-validated">
              <InputField 
                idInput={'nombre'} 
                type={'text'} 
                initialValue={cientificaObj.nombre ? cientificaObj.nombre : ''} 
                label={'Nombre cientifica'}
                parentAction={setValue}/>

              <InputField 
                idInput={'fecha_nacimiento'} 
                type={'date'} 
                initialValue={cientificaObj.fecha_nacimiento ? cientificaObj.fecha_nacimiento : ''} 
                label={'Fecha Nacimiento'}
                parentAction={setValue}/>

              <InputField 
                idInput={'nacionalidad'} 
                type={'text'} 
                initialValue={cientificaObj.nacionalidad ? cientificaObj.nacionalidad : ''} 
                label={'Nacionalidad'}
                parentAction={setValue}/>

              <InputField 
                idInput={'foto'} 
                type={'file'} 
                initialValue={''} 
                label={'Foto'}
                parentAction={setValue}/>
              
              <InputField 
                idInput={'descripcion'} 
                type={'textarea'} 
                initialValue={cientificaObj.descripcion ? cientificaObj.descripcion : ''} 
                label={'Descripción'}
                rows={5}
                parentAction={setValue}/>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => onCancel()}>Cancelar</button>
            <button type="submit" className="btn btn-primary" onClick={saveData}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
    
  ) 
  
}

export default Modal;