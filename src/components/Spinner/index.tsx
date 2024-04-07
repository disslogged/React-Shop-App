import spinner from "../../assets/spinner.svg";

type SpinnerProps = {
  fullScreen?: boolean;
};

const Spinner = ({ fullScreen = false }: SpinnerProps) => {
  return (
    <div className={`${fullScreen ? "absoluteCentered" : ""}`}>
      <img src={spinner} alt="spinner loader" />;
    </div>
  );
};

export default Spinner;
