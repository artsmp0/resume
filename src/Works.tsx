import { Component } from "solid-js";
import Tag from "./components/Tag";
import Title from "./components/Title";
import TextTag from "./components/TextTag";

export const Works: Component = () => {
  return (
    <section class="mb4">
      <Title>工作经历</Title>
      <div class="mb2">
        <h3 class="text-lg mb2">2021.07 - 2022.10：厦⻔深度赋智科技有限公司</h3>
        <ol class="list-decimal list-inside">
          <li>
            为了提升公司前端开发效率以及前端基础建设，关注国内外技术圈，为公司前端技术引入例如自动按需引入组件和
            API、Unocss 等潮流技术；提升了前端团队的 DX，
            <TextTag>平均一天节省了大约 5% 的开发时长</TextTag>。
          </li>
          <li>
            为了提升合同导入的效率，主动在需求评审阶段参与产品方案的设计以及落地，使得合同导入模块功能
            <TextTag>获得客户的赞许</TextTag>。
          </li>
          <li>
            为了提升项目的访问性能，主动负责前端接入 `oss cdn`
            相关方案的落地，将所负责项目的 lighthouse 跑分
            <TextTag>从 83 分提升到 92 分</TextTag>；
          </li>
        </ol>
      </div>
      <div>
        <h3 class="text-lg mb2">2022.11 - 至今：古珀科技</h3>
        <ol class="list-decimal list-inside">
          <li>
            为了加强前端团队的代码可维护性以及开发效率，在参与若干项目之后主动沉淀
            ts 基础模板，并基于此封装后台模板；
            <TextTag>界面美观性和功能易用性得到数据部门人员的认可</TextTag>。
          </li>
          <li>
            为了让各个项目封装的组件归拢到一起，且抹平一个组件需要分别在 js
            模板和 ts
            模板两次编写的问题，独立搭建公司的业务组件库，同时支持多端组件的编写，同时为了减少开发组件的难度，编写了一系列自动化脚本和规范；
            <TextTag>
              解决了 ts 和 js 组件需编写两次的问题，使得团队的基础代码能力更夯实
            </TextTag>
            。
          </li>
          <li>
            为了增强前端团队的技术交流与技术热情，主动在团队内进行了多次的技术分享、学习交流，使得前端团队热情高涨，
            <TextTag>并被评为优秀团队</TextTag>。
          </li>
        </ol>
      </div>
    </section>
  );
};
