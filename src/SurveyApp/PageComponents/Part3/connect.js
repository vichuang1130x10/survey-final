import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  part3Answer: state.app.part3Answer,
});

export default connect(mapStateToProps, null);
