import { Component, For, Match, Switch } from "solid-js";

const info = [
  {
    label: "年龄",
    value: "24岁",
    icon: "i-carbon-agriculture-analytics",
  },
  {
    label: "所在地",
    value: "杭州",
    icon: "i-carbon-location",
  },
  {
    label: "电话",
    value: "13386341553",
    type: "tel",
    icon: "i-carbon-phone",
  },
  {
    label: "邮箱",
    value: "artsmp@126.com",
    type: "email",
    icon: "i-carbon-email",
  },
  {
    label: "教育经历",
    value: "2017.09 - 2021.06 / 统招本科 / ⻰岩学院 - 软件⼯程",
    icon: "i-carbon-education",
  },
];

export const InfoList: Component = () => {
  return (
    <For each={info}>
      {(item) => (
        <div class="fvc ">
          <div class="fvc gap-1">
            <div class={[item.icon, "font-semibold"].join(" ")} />
            <Switch fallback={<div>{item.value}</div>}>
              <Match when={item.type === "email"}>
                <a class="link" href={`mailto:${item.value}`} target="_blank">
                  {item.value}
                </a>
              </Match>
              <Match when={item.type === "tel"}>
                <a class="link " href={`tel:+86${item.value}`} target="_blank">
                  {item.value}
                </a>
              </Match>
            </Switch>
          </div>
        </div>
      )}
    </For>
  );
};
