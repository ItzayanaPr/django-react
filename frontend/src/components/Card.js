import IconButton from "./IconButton.js";

function Card({cientifica, editAction, deleteAction, checksArray = [], parentAction }) {
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
    </div>
  );
}

export default Card;