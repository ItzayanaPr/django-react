import IconButton from "./IconButton.js";
import { deleteCientifica } from '../services/helper';

function Card({ imageName, name, resume, id, parentAction }) {

  const deleteCientist = (id) => {
    console.log('deleting', id);
    deleteCientifica(id)
  }

  const modifyCientist = (id) => {
    console.log('editing', id)
  }
  return (
    <div className="row card-container">
      <div className="col-2">
        <img src={imageName}  className=" avatar" alt={name} />
      </div>
      <div className="card-description col-7">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{resume}</p>        
      </div>
      <div className="card-actions col-2">
        <IconButton iconName="pencil-square" textColor="primary" action={modifyCientist} aditionalInfo={id}/>
        <IconButton iconName="trash" textColor="danger" action={deleteCientist} aditionalInfo={id}/>
      </div>
    </div>
  );
}

export default Card;