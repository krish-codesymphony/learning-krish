import type { ChangeEvent } from "react";

export default interface InputFieldProps {
  id: string;
  label: string;
  inputType: string;
  inputName: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}
