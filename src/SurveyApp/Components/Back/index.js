import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Back = ({ className, thunk }) => (
  <div className={className}>
    <button
      onClick={
        thunk
          ? () => thunk()
          : () => {
              window.history.back();
            }
      }
    >
      <span style={{ marginRight: "10px" }}>
        <FontAwesomeIcon icon={faChevronLeft} size="lg" />
      </span>
      返回上一步
    </button>
  </div>
);

export default Back;
