import { Component } from "solid-js";
import Title from "./components/Title";

export const SelfEValuation: Component = () => {
  return (
    <section class="mb4">
      <Title>自我评价</Title>
      <ul class="list-disc list-inside">
        <li>
          主观能动性高，参与实际项目时，能做到主动优化，并有积累沉淀意识；有代码洁癖，尽力做到自己能力范围内的优雅。
        </li>
        <li>
          积极参与开源社区，写过自己的 vscode
          主题和参与过开源组件库的建设；关注英文技术社区，提升自己的英文水平。
        </li>
      </ul>
    </section>
  );
};
