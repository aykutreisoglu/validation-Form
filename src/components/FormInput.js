import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focus, setFocus] = useState(false);

  const { label, onChange, errorMessage, id, ...inputProps } = props;

  const handleFocus=(e)=>{
    setFocus(true)
  }

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} 
      onChange={onChange} 
      onBlur={handleFocus} 
      focus={focus.toString()}
      onFocus={()=>inputProps.name==="confirmPassword" && setFocus(true) } />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
