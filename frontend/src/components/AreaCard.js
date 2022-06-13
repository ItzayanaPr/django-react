function Card({area}) {
  return (
    <div className="card-area">
      <div className="row">
        <div className="card-data col-12">
          <h5 className="card-title">{area.nombre}</h5>  
          <i className="bi bi-card-text float-end"></i> 
        </div>
      </div>
      
      <div className="card-description">
        <p className="card-text">{area.descripcion}</p>        
      </div>
    </div>
  );
}

export default Card;