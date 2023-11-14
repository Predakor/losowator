import type { Component } from "solid-js";
import Layout from "./layout/Layout";
import Wheel from "./components/Wheel";

const App: Component = () => {
  return (
    <>
      <Layout name="monkley">
        <Wheel />
      </Layout>
    </>
  );
};

export default App;
