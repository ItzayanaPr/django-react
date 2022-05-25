import IconButton from "./IconButton.js";

function Card({ imageName, name, resume, id }) {

  const deleteWoman = (id) => {
    console.log('deleting', id)
  }

  return (
    <div className="card-container">
      <div className="avatar">
        <img src={`https://randomuser.me/api/portraits/women/${imageName}`} className=" avatar" alt="Ada Lovelance" />
      </div>
      <div className="card-description">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{resume}</p>        
      </div>
      <div className="card-actions">
        {/* <button className="btn btn-primary float-end" onClick={() => console.log(id)}>Más información</button> */}
        <IconButton iconName="pencil-square" textColor="primary" action={deleteWoman} aditionalInfo={id}/>
        <IconButton iconName="trash" textColor="danger" action={deleteWoman} aditionalInfo={id}/>
      </div>
    </div>
  );
}

export default Card;