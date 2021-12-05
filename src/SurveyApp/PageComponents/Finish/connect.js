import { connect } from "react-redux";
import { saveEmail } from "../../data/appState";

const mapDispatchToProps = {
  saveEmail,
};

export default connect(null, mapDispatchToProps);
