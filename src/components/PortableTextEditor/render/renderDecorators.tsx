import React from "react";
import { RenderDecoratorFunction } from "@portabletext/editor"; // Adjust import path as needed

export const renderDecorator: RenderDecoratorFunction = (props) => {
  if (props.value === "strong") {
    return <strong>{props.children}</strong>;
  }
  if (props.value === "em") {
    return <em>{props.children}</em>;
  }
  if (props.value === "underline") {
    return <u>{props.children}</u>;
  }
  return <>{props.children}</>;
};
