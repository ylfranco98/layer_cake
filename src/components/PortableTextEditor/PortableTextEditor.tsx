import {
  defineSchema,
  EditorProvider,
  PortableTextEditable,
  RenderStyleFunction,
  useEditor,
  useEditorSelector,
} from "@portabletext/editor";
import type {
  PortableTextBlock,
  RenderDecoratorFunction,
  RenderListItemFunction,
  RenderBlockFunction,
  Editor,
  RenderAnnotationFunction,
} from "@portabletext/editor";
import { EventListenerPlugin } from "@portabletext/editor/plugins";
import { Dispatch, SetStateAction, useState } from "react";
// import { schema } from "@/lib/utils";
import PortableTextEditorToolbar from "./PortableTextEditorToolbar";
import { v4 as uuidv4 } from "uuid";
import { PortableTextSelection } from "@/lib/types";

import { renderStyles } from "./render/renderStyles";
import { renderDecorator } from "./render/renderDecorators";
import { renderAnnotation } from "./render/renderAnnotations";

const PortableTextEditor = () => {
  const editor = useEditor();

  const renderBlock: RenderBlockFunction = (props) => {
    if (props.schemaType.name === "image" && isImage(props.value)) {
      return (
        <div
          style={{
            border: "1px dotted grey",
            padding: "0.25em",
            marginBlockEnd: "0.25em",
          }}
        >
          IMG: {props.value.src}
        </div>
      );
    }

    return <div style={{ marginBlockEnd: "0.25em" }}>{props.children}</div>;
  };

  function isImage(
    props: PortableTextBlock
  ): props is PortableTextBlock & { src: string } {
    return "src" in props;
  }

  return (
    <div className="ptxt-container">
      <PortableTextEditorToolbar editor={editor} />
      <PortableTextEditable
        className="ptxt-editor"
        placeholder="Type your blog content here.&#10;Press Shift+Enter for kepp the selected style.&#10;Press Tab for nested lists"
        renderStyle={renderStyles}
        renderDecorator={renderDecorator}
        renderAnnotation={renderAnnotation}
        renderBlock={renderBlock}
        renderListItem={(props) => {
          return <>{props.children}</>;
        }}
      />
    </div>
  );
};

export default PortableTextEditor;
