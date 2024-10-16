import styleContainer from "./container.module.css";

type Props = {
  funcVerify: (
    condition: boolean,
    style: string,
    active: string,
    dark: string
  ) => string;
  stateMenu: boolean;
  children: JSX.Element;
};

function Content(props: Props) {
  const { funcVerify, stateMenu, children } = props;

  // llamando a la funcion verify
  const contentVerify = funcVerify(
    stateMenu,
    styleContainer.container,
    styleContainer.active,
    styleContainer.dark
  );

  return <div className={contentVerify}>{children}</div>;
}

export default Content;
