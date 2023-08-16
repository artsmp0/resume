import { Component, ParentProps } from "solid-js";

interface Props extends ParentProps {}

const Tag: Component<Props> = (props: Props) => {
  return (
    <span class="bg-rose text-white px1 font-mono rounded py2px mx1 text-13px">
      {props.children}
    </span>
  );
};

export default Tag;
