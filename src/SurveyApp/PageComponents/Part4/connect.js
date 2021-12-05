import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  part4Answer: state.app.part4Answer,
});

export default connect(mapStateToProps, null);
