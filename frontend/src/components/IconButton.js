function IconButton({iconName, textColor, action, textTooltip, aditionalInfo}){
  return(
    <button className="icon-button" onClick={() => action(aditionalInfo)}>
      <i className={`bi bi-${iconName} text-${textColor}`}></i>
    </button>
  );
}

export default IconButton;