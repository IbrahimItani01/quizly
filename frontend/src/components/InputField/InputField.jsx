import React from 'react'
import "./style.css"
const InputField = ({name,label ,onChange,value,placeholder,type}) => {
  return (
    <div className='input-field'>
      <label>{label}</label>
      <input name={name} onChange={onChange} value={value} placeholder={placeholder} type={type}></input>
    </div>
  )
}

export default InputField
