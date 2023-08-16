import { For, type Component, Show, Switch, Match } from "solid-js";
import { InfoList } from "./InfoList";
import { Technology } from "./Technology";
import { Works } from "./Works";
import { Projects } from "./Projects";
import { SelfEValuation } from "./SelfEValuation";

const App: Component = () => {
  return (
    <div class="lg:flex max-w-1120px mx-auto mt-8 gap-xl">
      <div class="basic-info min-w-88 flex flex-col gap-3 items-center lg:items-start">
        <h1 class="text-3xl font-semibold">沈孟平</h1>
        <InfoList />
      </div>
      <div class="px8 lh-[1.5]">
        <Technology />
        <Works />
        <Projects />
        <SelfEValuation />
      </div>
    </div>
  );
};

export default App;
