const SubmitButton = ({ name = 'Button', w = 'w-64', color = 'btn-secondary', border = 'black', onclick = () => { } }) => {
  return (
    <button className={`btn ${w} ${color} border-${border}`} onClick={onclick}>
      <p>{name}</p>
    </button>
  );
};

export default SubmitButton;