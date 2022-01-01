import { connect } from "react-redux";
import {
  setIsDataSend
} from "../../data/appState";

const mapStateToProps = (state) => ({
  appState: state.app,
  isDataSend:state.app.isDataSend
});

const mapDispatchToProps = {
  setIsDataSend
};

export default connect(mapStateToProps, mapDispatchToProps);
