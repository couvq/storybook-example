import React from "react";
import { Button } from "@mui/material";
import { string, oneOf, bool } from "prop-types";

const MuiButton = ({ variant, label, isDisabled }) => {
  return (
    <Button
        variant={variant}
        disabled={isDisabled}
    >
        {label}
    </Button>
  );
};

MuiButton.propTypes = {
    variant: oneOf(["contained", "outlined"]),
    label: string,
    isDisabled: bool
}

export default MuiButton;
