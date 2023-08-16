import { Component } from "solid-js";
import Tag from "./components/Tag";
import Title from "./components/Title";
import TextTag from "./components/TextTag";

export const Projects: Component = () => {
  return (
    <section class="mb4">
      <Title>项目经历</Title>
      <div class="mb2">
        <h3 class="text-lg mb2">易法通</h3>
        <ul>
          <li>
            <TextTag>技术栈：</TextTag>
            pnpm + vite + vue3 + typescript + sass + arco-design-vue + wps。
          </li>
          <li>
            <TextTag>目的：</TextTag>{" "}
            基于易法通现有客⼾，打造⼀款针对于国内中⼩型企业的合同全⽣命周期管理系统，
            进⼊法律科技赛道。
          </li>
          <li>
            <TextTag>个人职责：</TextTag>负责合同导入、合同审查等模块的开发。
          </li>
          <li>
            <TextTag>亮点：</TextTag>
            <ol class="list-decimal list-inside ml8">
              <li>
                <TextTag class="text-cyan-5!">深⼊业务，完善产品：</TextTag>
                负责合同导⼊模块时，深⼊业务为产品完善该模块的业务能⼒：熟知公司各部门技术，并溶于业务；提出采⽤
                OCR 的⽅式进⾏履约事项的提取，并提出对应的解决⽅案。
              </li>
              <li>
                <TextTag class="text-cyan-5!">复杂业务实现：</TextTag>
                承接复杂的技术实现，例如按照合同周期及循环⽅式，动态切割履约事项为周期节点；框选合同图⽚进⾏
                OCR 以及履约事项和图⽚之间的定位功能。
              </li>
              <li>
                <TextTag class="text-cyan-5!">交互和性能优化：</TextTag>
                因为缺失专业的
                UI，主动和产品经理交流、设计并实现界面和动效；且vite
                默认的构建容易产出超大 chunk，所以主动去学习 vite
                相关知识，对构建产出进行进一步拆分，提升首屏加载速度。
              </li>
              <li>
                <TextTag class="text-cyan-5!">公共组件和逻辑抽取：</TextTag>
                为了提升项目的开发速度，有意识的不断的小重构抽离了大量重复代码，成为公用的逻辑和组件，并编写相关文档；使得项目在高强度迭代中依然拥有良好的维护性，在绩效评比时得到公司老板的认可。
              </li>
            </ol>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg mb2">数据中台</h3>
        <ul>
          <li>
            <TextTag>目的：</TextTag> 采用时下流行的 vue3
            技术生态圈，构建公司的数据产品，为公司的业务进行良好的支撑。
          </li>
          <li>
            <TextTag>达成效果：</TextTag>
            为数据部门降本提效，良好的交互体验和设计使得数据产品可以对外销售。
          </li>
          <li>
            <TextTag>亮点：</TextTag>
            <ol class="list-decimal list-inside ml8">
              <li>
                <TextTag class="text-cyan-5!">提高项目质量：</TextTag>
                推进数据中台团队内项目统一采用 ts 模板，不定期的在团队内进行 ts
                技术分享；根据禅道数据反馈，采用 ts 模板开发后，提测后 bug
                量减少 15%。
              </li>
              <li>
                <TextTag class="text-cyan-5!">团队资产提升：</TextTag>
                迁移现有的 js 模板公共组件到 ts
                中，在使用过程中不断的进行功能优化，并加入单元测试提高组件质量。而后又无缝的将这些组件迁移到业务组件库中，实现了现有多套模板的组件差异化消除。
              </li>
              <li>
                <TextTag class="text-cyan-5!">技术可行探索：</TextTag>
                公司的数据血缘与日俱增，急需性能良好的图谱组件来显示数据关联关系；封装出通用的血缘图谱组件，支持自定义交互，有良好的展示性能，使得复杂的数据关系得以从
                excel 表格转化成清晰明了的关系图。
              </li>
              <li>
                <TextTag class="text-cyan-5!">主观能动性高：</TextTag>
                旧界面的设计和交互问题有大量客诉，主动对旧项目进行UI重构，保证功能的同时，整体采用扁平化设计，支持明暗色主题，提供组件级样式更改，可定制化高，获得客户的一致好评。
              </li>
            </ol>
          </li>
        </ul>
      </div>
    </section>
  );
};
