const Checkbox = ({ name, label, checked, onChange, error }) => {
  // id="flexCheckDefault"
  return (
    <div className="form-check text-start my-3">
      <input id={name} name={name} onChange={onChange} checked={checked} className="form-check-input" type="checkbox" value="remember-me" />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {label}
      </label>
      {error && <div className="err-input">{error}</div>}
    </div>
  );
};

export default Checkbox;
