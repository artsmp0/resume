import { Component, ParentProps } from "solid-js";

interface Props extends ParentProps {}

const Title: Component<Props> = (props: Props) => {
  return <h2 class="text-xl font-semibold mb2">{props.children}</h2>;
};

export default Title;
