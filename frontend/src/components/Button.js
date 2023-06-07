const ButtonUI = ({ valueAndIndex, onClick }) => {
  return (
    <button
      id={"button" + valueAndIndex.i}
      className={
        "buttonBox " + (valueAndIndex.v.length === 2 && "winningPosition")
      }
      onClick={() => onClick(valueAndIndex.i)}
      disabled={!!valueAndIndex.v}
    >
      {valueAndIndex.v}
    </button>
  );
};

export default ButtonUI;
