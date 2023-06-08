const Input = ({ name, label, value, onChange, type, error, placeholder = "" }) => {
  return (
    <div className="form-floating">
      <input id={name} name={name} placeholder={placeholder} onChange={onChange} type={type} value={value} className={error ? "form-control error" : "form-control"} />
      {error && <div className="input-error">{error}</div>}
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
};

export default Input;
