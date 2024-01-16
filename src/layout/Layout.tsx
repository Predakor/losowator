import { JSXElement } from "solid-js";
import Header from "./Header/Header";

interface Props {
  children: JSXElement;
}

function Layout(props: Props) {
  return (
    <>
      <Header />
      <main class=" flex flex-1 flex-col items-center justify-around p-2">
        {props.children}
      </main>
      {/* <footer class="footer">
        <p>this is footer</p>
      </footer> */}
    </>
  );
}
export default Layout;
