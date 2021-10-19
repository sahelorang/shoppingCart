import React, { useState } from "react";
import { FormControl, TextField, IconButton } from "@material-ui/core";
import clsx from "clsx";
import Styles from "../NumberInput/Styles";
import IInputProps from "../NumberInput/Types";

const NumberInput = React.forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      color,
      label,
      disabled,
      placeholder,
      rounded,
      variant,
      size,
      value,
      onChange,
    }: IInputProps,
    ref
  ) => {
    const classes = Styles();

    const roundedClass = [];
    rounded
      ? roundedClass.push(classes.rounded)
      : roundedClass.push(classes.noRounded);

    return (
      <FormControl variant="outlined" fullWidth>
        <TextField
          ref={ref}
          variant={variant}
          color={color}
          type="number"
          onChange={onChange}
          label={label}
          disabled={disabled}
          placeholder={placeholder}
          inputProps={{ className: classes.field }}
          size={size}
          value={value as number}
          InputProps={{
            classes: { root: clsx(roundedClass) },
            startAdornment: (
              <IconButton
                disabled={disabled}
                classes={{ root: classes.button }}
                onClick={() => onChange(Number(value + 1))}
              >
                +
              </IconButton>
            ),
            endAdornment: (
              <IconButton
                disabled={disabled}
                classes={{ root: classes.button }}
                onClick={() => onChange(Number(value - 1))}
              >
                -
              </IconButton>
            ),
          }}
        />
      </FormControl>
    );
  }
);
export default NumberInput;
