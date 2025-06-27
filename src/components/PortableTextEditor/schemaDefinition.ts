import { defineSchema } from "@portabletext/editor";

export const schemaDefinition = defineSchema({
  // Decorators are simple marks that don't hold any data
  decorators: [{ name: "strong" }, { name: "em" }, { name: "underline" }],
  // Styles apply to entire text blocks
  // There's always a 'normal' style that can be considered the paragraph style
  styles: [
    { name: "normal" },
    { name: "h1" },
    { name: "h2" },
    { name: "h3" },

    { name: "blockquote" },
  ],

  // The types below are left empty for this example.
  // See the rendering guide to learn more about each type.

  // Annotations are more complex marks that can hold data (for example, hyperlinks).
  annotations: [{ name: "link", fields: [{ name: "href", type: "string" }] }],
  // Lists apply to entire text blocks as well (for example, bullet, numbered).
  lists: [{ name: "bullet" }, { name: "number" }],

  // Inline objects hold arbitrary data that can be inserted into the text (for example, custom emoji).
  inlineObjects: [
    { name: "stock-ticker", fields: [{ name: "symbol", type: "string" }] },
  ],
  // Block objects hold arbitrary data that live side-by-side with text blocks
  blockObjects: [{ name: "image", fields: [{ name: "src", type: "string" }] }],
});

// 1. Helper type to extract `name` if it’s a string
type ExtractName<T> = T extends { name: infer N extends string } ? N : never;

//Union of all `name` properties from the schema
export type AllSchemaNameKeys =
  | ExtractName<(typeof schemaDefinition.decorators)[number]>
  | ExtractName<(typeof schemaDefinition.styles)[number]>
  | ExtractName<(typeof schemaDefinition.annotations)[number]>
  | ExtractName<(typeof schemaDefinition.lists)[number]>
  | ExtractName<(typeof schemaDefinition.blockObjects)[number]>;
