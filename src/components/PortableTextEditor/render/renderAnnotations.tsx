// "use client";
import React from "react";
import { RenderAnnotationFunction } from "@portabletext/editor";
import { AnnotationLink } from "./AnnotationLink";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const renderAnnotation: RenderAnnotationFunction = (props) => {
  if (props.schemaType.name === "link") {
    // const [open, setOpen] = React.useState(false);
    // console.log("LINK ANNOTATION RENDERED", props);
    // return <AnnotationLink {...props} />;
    // const [url, setUrl] = React.useState(
    //   "value" in props && typeof props.value.url === "string"
    //     ? props.value.url
    //     : ""
    // );

    return <AnnotationLink {...props} />;
  }

  return <>{props.children}</>;
};
