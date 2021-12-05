import { connect } from "react-redux";
import { updatePart2Id } from "../../data/appState";

const mapStateToProps = (state) => ({
  part2Id: state.app.part2Id,
  part2AAnswer: state.app.part2AAnswer,
  part2BAnswer: state.app.part2BAnswer,
});

const mapDispatchToProps = { updatePart2Id };

export default connect(mapStateToProps, mapDispatchToProps);



// part2AAnswer: [0, 0, 0, 0],
// part2BAnswer: [0, 0, 0, 0],