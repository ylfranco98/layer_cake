import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// import { defineSchema } from "@portabletext/editor";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseServerActionResponse<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}

// export function schema() {
//   return defineSchema({
//     // Decorators are simple marks that don't hold any data
//     decorators: [{ name: "strong" }, { name: "em" }, { name: "underline" }],
//     // Styles apply to entire text blocks
//     // There's always a 'normal' style that can be considered the paragraph style
//     styles: [
//       { name: "normal" },
//       { name: "h1" },
//       { name: "h2" },
//       { name: "h3" },
//       { name: "blockquote" },
//     ],

//     // The types below are left empty for this example.
//     // See the rendering guide to learn more about each type.

//     // Annotations are more complex marks that can hold data (for example, hyperlinks).
//     annotations: [],
//     // Lists apply to entire text blocks as well (for example, bullet, numbered).
//     lists: [],
//     // Inline objects hold arbitrary data that can be inserted into the text (for example, custom emoji).
//     inlineObjects: [],
//     // Block objects hold arbitrary data that live side-by-side with text blocks (for example, images, code blocks, and tables).
//     blockObjects: [],
//   });
// }
