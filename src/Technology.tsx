import { Component } from "solid-js";
import Tag from "./components/Tag";
import Title from "./components/Title";

export const Technology: Component = () => {
  return (
    <section>
      <Title>技术特点</Title>
      <ul class="list-disc list-inside">
        <li>
          熟练掌握
          <Tag>gulp、rollup、vite</Tag>
          等前端构建⼯具和脚本工具，并基于此开发过公司业务组件库；
        </li>
        <li>
          熟练掌握 <Tag>vue2、vue3</Tag> 相关技术栈，熟悉框架底层原理，熟练使用
          <Tag>typescript</Tag> 进行项目开发；
        </li>
        <li>
          熟练掌握 <Tag>react</Tag> 技术栈，熟悉 <Tag>solidjs</Tag>
          等前端框架的基础使用；
        </li>
        <li>
          熟练掌握前端工程化相关工具链，熟悉
          <Tag>eslint、stylelint、prettier</Tag>
          等代码规范⼯具；
        </li>
        <li>
          熟练掌握 <Tag>git</Tag> ⼯具及 <Tag>gitlab、jira、云效</Tag> ⼯作流；
        </li>
        <li>
          熟练掌握 <Tag>nodejs</Tag>，能编写简单的 <Tag>cli</Tag>
          脚本进行工作辅助。
        </li>
      </ul>
    </section>
  );
};
