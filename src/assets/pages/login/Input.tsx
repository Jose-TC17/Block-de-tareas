import styleInput from "../CSS/Input.module.css";
import { useState } from "react";

type Props = {
  text: string;
  typeInput: string;
  nameInput: string;
  placeholder: string;
  idInput: string;
};

export default function Input(props: Props) {
  const { text, typeInput, nameInput, placeholder, idInput } = props;

  const [focus, setFocus] = useState(false);

  const funcFocus = () => {
    setFocus(!focus);
  };

  return (
    <div className={styleInput.containerInput}>
      <label className={styleInput.label}>{text}</label>
      <input
        className={styleInput.inp}
        type={typeInput}
        name={nameInput}
        placeholder={placeholder}
        id={idInput}
        autoComplete="off"
        onClick={funcFocus}
      />
      <div className={styleInput.lineText}></div>
    </div>
  );
}
