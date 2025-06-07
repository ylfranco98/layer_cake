import { Option } from "@/components/ui/multiselect";
import { LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";
import type { PortableTextBlock } from "@portabletext/editor";

export type MenuItem = {
  name: "Home" | "Recipes" | "Tips" | "Blogs"; // Only valid keys
  path: string;
};

export type CollapsibleMenuType = {
  title: string | undefined;
  href: string | undefined;
  description: string | undefined;
  icon: React.ComponentType<any> | undefined;
};

export type Category = {
  _id: string;
  slug: { current: string };
  title: string;
  description: string;
  icon: string;
};

export type PostForm = {
  title: string;
  category: Option[];
  body: Array<PortableTextBlock>;
  // description: string;
  // icon: string;
};

export type PortableTextSelection = {
  style: string;
  decorator: { strong: boolean; em: boolean; underline: boolean };
};

export type PtxtStyle = {
  name: string;
};

export type PtxtDecorator = {
  name: string;
};

export type PtxtAnnotation = {
  name: string;
  fields: { name: string; type: string }[];
};
export type PtxtList = {
  name: string;
};
export type PtxtInlineObject = {
  name: string;
  fields: { name: string; type: string }[];
};
export type PtxtBlockObject = {
  name: string;
  fields: { name: string; type: string }[];
};
export type PtxtSchema = {
  decorators: PtxtDecorator[];
  styles: PtxtStyle[];
  annotations: PtxtAnnotation[];
  lists: PtxtList[];
  inlineObjects: PtxtInlineObject[];
  blockObjects: PtxtBlockObject[];
};
