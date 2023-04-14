const TextInput = ({ h='h-10', placeholder="What's your name?" }) => {
    return (
        <div className="form-control w-full max-w-xs flex-col items-start">
            <input type="text" placeholder={`${placeholder}`} className={`input input-bordered w-full max-w-xs bg-gray-100 border-none ${h}`} />
        </div>
    );
}

export default TextInput;