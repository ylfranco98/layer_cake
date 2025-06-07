import React, { useEffect } from "react";
import {
  defineSchema,
  EditorProvider,
  PortableTextEditable,
  RenderStyleFunction,
  useEditor,
} from "@portabletext/editor";
import type {
  PortableTextBlock,
  RenderDecoratorFunction,
  Editor,
} from "@portabletext/editor";
import { EventListenerPlugin } from "@portabletext/editor/plugins";
import { useState } from "react";
// import { schema } from "@/lib/utils";
import PortableTextEditorToolbar from "./PortableTextEditorToolbar";
import { v4 as uuidv4 } from "uuid";
import PortableTextEditor from "./PortableTextEditor";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import { schemaDefinition } from "./schemaDefinition";
import { PostForm } from "@/lib/types";

const EditorContext = ({
  formState,
  setState,
}: {
  formState: PostForm;
  setState: React.Dispatch<React.SetStateAction<PostForm>>;
}) => {
  const [value, setValue] = useState<Array<PortableTextBlock>>([]);

  useEffect(() => {
    setState({ ...formState, body: value });
  }, [value]);

  return (
    <>
      <EditorProvider
        initialConfig={{
          schemaDefinition,
          initialValue: value,
        }}
      >
        <EventListenerPlugin
          on={(event) => {
            if (event.type === "mutation") {
              setValue(event.value ?? []);
            }
          }}
        />

        <PortableTextEditor />
      </EditorProvider>
    </>
  );
};

export default EditorContext;
