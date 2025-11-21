import type InputFieldProps from "../types/inputFieldProps";

function InputField({
  id,
  label,
  inputType,
  inputName,
  changeHandler,
}: InputFieldProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={inputType}
        name={inputName}
        id={id}
        onChange={changeHandler}
      />
    </>
  );
}

export default InputField;