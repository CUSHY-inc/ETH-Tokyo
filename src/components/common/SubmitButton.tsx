const SubmitButton = ({ name='Button', w='w-64', color='btn-secondary' }) => {
    return (
      <button className={`btn border-none ${w} ${color}`}>
        <p>{name}</p>
      </button>
    );
  };
  
  export default SubmitButton;