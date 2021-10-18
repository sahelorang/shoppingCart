import { OutlinedTextFieldProps } from "@material-ui/core";

interface IInputProps extends OutlinedTextFieldProps {
  rounded?: boolean;
  label?: string;
  value: number;
  onChange: (value: any) => void;
}

export default IInputProps;
