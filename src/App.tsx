import { For, type Component, Show, Switch, Match } from "solid-js";

const App: Component = () => {
  const info = [
    {
      label: "年龄",
      value: "23岁",
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
  return (
    <div class="lg:flex max-w-980px mx-auto mt-8 gap-xl">
      <div class="basic-info min-w-88 flex flex-col gap-3 items-center lg:items-start">
        <h1 class="text-xl font-semibold">沈孟平</h1>
        <For each={info}>
          {(item) => (
            <div class="fvc ">
              <div class="fvc gap-1">
                <div class={item.icon} />
                <Switch fallback={<div>{item.value}</div>}>
                  <Match when={item.type === "email"}>
                    <a
                      class="link"
                      href={`mailto:${item.value}`}
                      target="_blank"
                    >
                      {item.value}
                    </a>
                  </Match>
                  <Match when={item.type === "tel"}>
                    <a
                      class="link "
                      href={`tel:+86${item.value}`}
                      target="_blank"
                    >
                      {item.value}
                    </a>
                  </Match>
                </Switch>
              </div>
            </div>
          )}
        </For>
      </div>
      <div class="content">
        My name is Anthony Fu, a master of computer science student and a
        freelance software engineer. My passion for software lies with dreaming
        up ideas and making them come true with elegant interfaces. I take great
        care in the experience, architecture, and code quality of the things I
        build.
      </div>
    </div>
  );
};

export default App;
