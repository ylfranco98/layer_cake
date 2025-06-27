import React from "react";
import { schemaDefinition } from "../schemaDefinition";
import { Editor, useEditorSelector } from "@portabletext/editor";
import * as selectors from "@portabletext/editor/selectors";
import { Button } from "@/components/ui/button";
import { icons } from "@/lib/icons";

// This component will contain buttons for different text styles like headings, blockquotes, etc.
interface StylesButtonsProps {
  editor: Editor;
}

const StylesButtons: React.FC<StylesButtonsProps> = ({ editor }) => {
  const styleButtons = schemaDefinition.styles.map((currentStyle) => {
    const active = useEditorSelector(
      editor,
      selectors.isActiveStyle(currentStyle.name)
    );
    return (
      <Button
        key={currentStyle.name}
        className={`${active ? "" : "bg-pink-bg"} hover:bg-primary-light`}
        onClick={() => {
          // Send style toggle event
          editor.send({
            type: "style.toggle",
            style: currentStyle.name,
          });
          editor.send({
            type: "focus",
          });
        }}
      >
        {icons[currentStyle.name]}
      </Button>
    );
  });
  return <div className="ptxt-editor-tool">{styleButtons}</div>;
};

export default StylesButtons;
