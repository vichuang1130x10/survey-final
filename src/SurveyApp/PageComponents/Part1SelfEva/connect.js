/* number: i,
  // character: c,
  // toggle: false,
  // idealValue: 50,
  // realValue: 50, */

import { connect } from "react-redux";
import {
  nextPart1CharObj,
  backPart1CharObj,
  updateIdealValue,
  updateRealValue,
  updatePart1Id,
} from "../../data/appState";

const mapStateToProps = (state) => ({
  charObj:
    state.app.part1Id === 0
      ? state.app.part1SelectedChars.part1A[state.app.part1Index]
      : state.app.part1SelectedChars.part1B[state.app.part1Index],
  index: state.app.part1Index,
  part1Id: state.app.part1Id,
});

const mapDispatchToProps = {
  nextPart1CharObj,
  backPart1CharObj,
  updateIdealValue,
  updateRealValue,
  updatePart1Id,
};

export default connect(mapStateToProps, mapDispatchToProps);
