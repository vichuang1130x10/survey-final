import { connect } from "react-redux";
import { saveEmail } from "../../data/appState";

const mapStateToProps = (state) => ({
  appState: state.app,
});

const mapDispatchToProps = {
  saveEmail,
};

export default connect(mapStateToProps, mapDispatchToProps);
