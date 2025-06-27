import React from "react";

export interface RenderStyleProps {
  schemaType: { value: string };
  children: React.ReactNode;
}

export type RenderStyleFunction = (
  props: RenderStyleProps
) => React.ReactElement;

export const renderStyles: RenderStyleFunction = (props) => {
  switch (props.schemaType.value) {
    case "h1":
      return <h1 className="ptxt-h1">{props.children}</h1>;
    case "h2":
      return <h2 className="ptxt-h2">{props.children}</h2>;
    case "h3":
      return <h3 className="ptxt-h3">{props.children}</h3>;
    case "blockquote":
      return <blockquote className="ptxt-quote">{props.children}</blockquote>;
    default:
      return <>{props.children}</>;
  }
};
