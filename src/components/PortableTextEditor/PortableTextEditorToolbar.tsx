// import { schema } from "@/lib/utils";
import {
  defineSchema,
  Editor,
  useEditor,
  useEditorSelector,
} from "@portabletext/editor";
import { Button } from "../ui/button";
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
import { useState } from "react";
import { PortableTextSelection } from "@/lib/types";
import handleUpload from "@/lib/actions";

import { useFileUpload } from "@/hooks/use-file-upload";
import StylesButtons from "./toolbar/StylesButtons";
import DecoratorsButtons from "./toolbar/DecoratorsButtons";
import AnnotationsButtons from "./toolbar/AnnotationsButtons";
import { ListsButtons } from "./toolbar/ListsButtons";

export default function PortableTextEditorToolbar({
  editor,
}: {
  editor: Editor;
}) {
  const [{ files }, { removeFile, openFileDialog, getInputProps }] =
    useFileUpload({
      accept: "image/*",
    });

  const previewUrl = files[0]?.preview || null;
  const fileName = files[0]?.file.name || null;

  const imageButton = (
    <div className="relative inline-block">
      <Button
        className="bg-pink-bg hover:bg-primary-light"
        onClick={() => {
          openFileDialog();
          // const url = files?.length > 0 ? handleUpload(files[0].file) : "";
          editor.send({
            type: "insert.block object",
            blockObject: {
              name: "image",
              // value: { src: url },
            },
            placement: "auto",
          });
          editor.send({ type: "focus" });
        }}
        aria-haspopup="dialog"
      >
        <Image />
      </Button>
      <input
        {...getInputProps()}
        className="sr-only"
        aria-label="Upload image file"
        tabIndex={-1}
      />
    </div>
    // </div>
    // </div>
  );

  return (
    <div className="flex flex-row gap-3 w-full p-2">
      <StylesButtons editor={editor} />
      <DecoratorsButtons editor={editor} />
      <AnnotationsButtons editor={editor} />
      <ListsButtons editor={editor} />
    </div>
  );
}
