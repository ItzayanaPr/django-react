import IconButton from "./IconButton.js";
import InputField from "./Input.js";
import RadioButton from "./RadioButton.js";

function Card({cientifica, editAction, deleteAction, checksArray = [], parentAction }) {
  const objectTemp = {};

  const setValue = (key, value) => {
    objectTemp[key] = value;
  }


  return (
    <div className="card-container">
      <div className="row">
        <div className="col-6">
          <img src={cientifica.foto}  className="avatar" alt={cientifica.nombre} />
        </div>
        <div className="card-data col-6">
          <h5 className="card-title">{cientifica.nombre}</h5>
          <h6 className="card-title">{cientifica.nacionalidad}</h6>
          <p>Nace el: {cientifica.fecha_nacimiento}</p>     
        </div>
      </div>
      
      <div className="card-description">
        <p className="card-text">{cientifica.descripcion}</p>        
      </div>
      <div className="card-actions">
        <IconButton iconName="pencil-square" textColor="primary" action={editAction} aditionalInfo={cientifica}/>
        <IconButton iconName="trash" textColor="danger" action={deleteAction} aditionalInfo={cientifica.id}/>
      </div>
      <div className="collapse" id={`${cientifica.nombre}Collapse`}>
        <div className="card card-body">
          <form>
            <InputField 
              idInput={'nombre'} 
              type={'text'} 
              initialValue={cientifica.nombre} 
              label={'Nombre cientifica'}
              parentAction={setValue}/>

            <InputField 
              idInput={'fecha_nacimiento'} 
              type={'date'} 
              initialValue={cientifica.fecha_nacimiento} 
              label={'Fecha Nacimiento'}
              parentAction={setValue}/>

            <InputField 
              idInput={'nacionalidad'} 
              type={'text'} 
              initialValue={cientifica.nacionalidad} 
              label={'Nacionalidad'}
              parentAction={setValue}/>

            <InputField 
              idInput={'foto'} 
              type={'file'} 
              initialValue={cientifica.foto[0].name} 
              label={'Foto'}
              parentAction={setValue}/>
            
            <InputField 
              idInput={'descripcion'} 
              type={'textarea'} 
              initialValue={cientifica.descripcion} 
              label={'Descripción'}
              rows={5}
              parentAction={setValue}/>

            <div className="row mb-3">                  
                <RadioButton
                  nameRadios={'area'}
                  options={checksArray}
                  label={'¿A qué área pertenece?'}
                  parentAction={setValue}
                />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Card;