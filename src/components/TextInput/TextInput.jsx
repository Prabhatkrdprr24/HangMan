function TextInput({label, type = "password", value, onChange}){
    return (
        <label className="block">
            {label && <span>{label}</span>}
            <input
                className="px-4 py-4 border border-gray-500 rounded-md w-full"
                onChange={onChange}
                placeholder = {label}
                type = {type}
                value = {value}
            />
        </label>
    );
}
export default TextInput;