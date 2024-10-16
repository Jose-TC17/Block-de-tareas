import styleShowPassword from "../CSS/ShowPassword.module.css";

type Props = {
  typeChecked: boolean;
  funcChecked: () => void;
};

export default function ShowPassword(props: Props) {
  const { typeChecked, funcChecked } = props;
  return (
    <div className={styleShowPassword.containerSP}>
      <input
        className={styleShowPassword.input}
        checked={typeChecked}
        onClick={funcChecked}
        type="checkbox"
      />
      <p className={styleShowPassword.p}>Mostrar Contraseña</p>;
    </div>
  );
}
