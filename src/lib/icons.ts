import React, { ReactElement } from "react";
import {
  Type,
  Heading1,
  Heading2,
  Heading3,
  Quote,
  List,
  ListOrdered,
  Bold,
  Italic,
  Underline,
  Image,
  Heading4,
  Link2,
} from "lucide-react";
import { AllSchemaNameKeys } from "@/components/PortableTextEditor/schemaDefinition";

export const icons: Partial<Record<AllSchemaNameKeys, ReactElement>> = {
  normal: React.createElement(Type, { className: "size-4" }),
  h1: React.createElement(Heading1, { className: "size-4" }),
  h2: React.createElement(Heading2, { className: "size-4" }),
  h3: React.createElement(Heading3, { className: "size-4" }),
  blockquote: React.createElement(Quote, { className: "size-4" }),
  bullet: React.createElement(List, { className: "size-4" }),
  number: React.createElement(ListOrdered, { className: "size-4" }),
  underline: React.createElement(Underline, { className: "size-4" }),
  image: React.createElement(Image, { className: "size-4" }),
  strong: React.createElement(Bold, { className: "size-4" }),
  em: React.createElement(Italic, { className: "size-4" }),
  link: React.createElement(Link2, { className: "size-4" }),
};
