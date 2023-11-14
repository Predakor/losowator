import { JSXElement, children } from "solid-js";
import Wheel from "../components/Wheel";

interface Props {
  children: JSXElement;
  name: string;
}
function Layout(props: Props) {
  return (
    <>
      <header> this is header</header>
      <main>{props.children}</main>
      <footer> this is footer</footer>
    </>
  );
}
export default Layout;
