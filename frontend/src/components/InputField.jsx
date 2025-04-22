function InputField({ label, type, value, onChange, name, required = false }) {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium mb-1 text-indigo-200"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-2 rounded bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  )
}

export default InputField
