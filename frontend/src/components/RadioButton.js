import { Fragment, useState } from 'react';

function RadioButton({nameRadios = 'defaultRadios', options = [], label, initialValue ,parentAction}) {

  const [optionsRadios, setOptionsRadios] = useState(options);

  const onChangeRadio = (event) => {
    const currentValue = Number(event.target.value);
    console.log(currentValue);
    let newValueOptions = [];
    for (const option of options) {
        option.checked = currentValue === option.id;
        newValueOptions.push(option);
    }
    setOptionsRadios(newValueOptions);
    parentAction(nameRadios, currentValue);
  }

  
  return (
      <Fragment>
        <label htmlFor={nameRadios} className="form-label">{label}</label>
        {
          optionsRadios.map((option, index) => {
            return (
              <div className="col-6" key={`${option.nombre}-${index}`}>
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name={nameRadios} 
                    value={option.id} 
                    id={option.nombre} 
                    onChange={onChangeRadio} 
                    checked={option.checked}
                  />
                  <label className="form-check-label" htmlFor={option.nombre}>
                    {option.nombre}
                  </label>
                </div>
              </div>)
          })
        }      
      </Fragment>
  );  
}

export default RadioButton;