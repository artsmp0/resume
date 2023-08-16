import { Component, ParentProps } from "solid-js";

interface Props extends ParentProps {}

const Title: Component<Props> = (props: Props) => {
  return <h2 class="text-2xl font-semibold mb3">{props.children}</h2>;
};

export default Title;
