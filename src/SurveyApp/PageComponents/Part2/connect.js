import { connect } from "react-redux";
import { updatePart2Id } from "../../data/appState";

const mapStateToProps = (state) => ({
  part2Id: state.app.part2Id,
});

const mapDispatchToProps = { updatePart2Id };

export default connect(mapStateToProps, mapDispatchToProps);
