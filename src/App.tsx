import { For, type Component, Show, Switch, Match } from "solid-js";
import { InfoList } from "./InfoList";

const App: Component = () => {
  return (
    <div class="lg:flex max-w-980px mx-auto mt-8 gap-xl">
      <div class="basic-info min-w-88 flex flex-col gap-3 items-center lg:items-start">
        <h1 class="text-2xl font-semibold">沈孟平</h1>
        <InfoList />
      </div>
      <div class="content"></div>
    </div>
  );
};

export default App;
