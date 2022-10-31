const Input = (props: { id: string; type: string }) => {
  const { id, type } = props;

  return <input type={type} id={id} />;
};

export default Input;
