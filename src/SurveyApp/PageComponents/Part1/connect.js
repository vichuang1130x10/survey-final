import { connect } from "react-redux";
import {
  getPart1Chars,
  // updatePart1CharIndex,
  udpatePart1CharSelect,
  resetPart1Index,
  // resetSelectChar,
} from "../../data/appState";

const mapStateToProps = (state) => ({
  chars: state.app.part1Chars,
});

const mapDispatchToProps = {
  getPart1Chars,
  resetPart1Index,
  // updatePart1CharIndex,
  udpatePart1CharSelect,
  // resetSelectChar,
};

export default connect(mapStateToProps, mapDispatchToProps);
