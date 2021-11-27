import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import MuiInput from "@mui/material/Input";

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function VerticalSlider({ callback, pValue }) {
  const [value, setValue] = React.useState(50);

  React.useEffect(() => {
    setValue(pValue);
  }, [pValue]);

  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  }

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    callback(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
    callback(event.target.value);
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
      callback(0);
    } else if (value > 100) {
      setValue(100);
      callback(100);
    }
  };

  return (
    <Box sx={{ height: "250px" }}>
      <div className="slider-content">
        <div className="slider-wrapper">
          <div className="ball">
            <h4>100</h4>
          </div>
          <div style={{ height: "250px" }}>
            <Slider
              sx={{
                '& input[type="range"]': {
                  WebkitAppearance: "slider-vertical",
                },
              }}
              orientation="vertical"
              onChange={handleSliderChange}
              value={value}
              aria-labelledby="input-slider"
              onKeyDown={preventHorizontalKeyboardNavigation}
            />
          </div>
          <div className="ball">
            <h4>0</h4>
          </div>
        </div>
        <Input
          value={value}
          size="small"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="number"
        />
      </div>
    </Box>
  );
}
