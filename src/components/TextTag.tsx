import { Component, ParentProps } from "solid-js";

interface Props extends ParentProps {
  class?: string;
}

const TextTag: Component<Props> = (props: Props) => {
  return (
    <span class={`text-rose font-bold ${props.class}`}>{props.children}</span>
  );
};

export default TextTag;
