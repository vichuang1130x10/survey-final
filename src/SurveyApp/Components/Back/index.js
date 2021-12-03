import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { navigate } from "@reach/router";

const Back = ({ className, thunk }) => (
  <div className={className}>
    <button
      onClick={
        // thunk
        //   ? () => thunk()
        //   : () => {
        //       window.history.back();
        //     }
        () => navigate("/background")
      }
    >
      <span style={{ marginRight: "10px" }}>
        <FontAwesomeIcon icon={faChevronLeft} size="lg" />
      </span>
      重新作答
    </button>
  </div>
);

export default Back;
