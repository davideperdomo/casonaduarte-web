export const FormInput = ({ inputType = "input", ...props }) => {
  const inputTypes = {
    input: <input {...props} />,
    textArea: <textarea {...props}/>
  };
  return ( inputTypes[inputType] ?? <textarea /> );
};