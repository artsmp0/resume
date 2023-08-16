import { Component, ParentProps } from "solid-js";

interface Props extends ParentProps {}

const TextTag: Component<Props> = (props: Props) => {
  return <span class=" text-rose font-bold">{props.children}</span>;
};

export default TextTag;
