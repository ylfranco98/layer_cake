import React from "react";
import { schemaDefinition } from "../schemaDefinition";
import { Editor, useEditorSelector } from "@portabletext/editor";
import * as selectors from "@portabletext/editor/selectors";
import { Button } from "@/components/ui/button";
import { icons } from "@/lib/icons";

// This component will contain buttons for different text styles like headings, blockquotes, etc.
interface DecoratorsButtonsProps {
  editor: Editor;
}

const DecoratorsButtons: React.FC<DecoratorsButtonsProps> = ({ editor }) => {
  const decoratorButtons = schemaDefinition.decorators.map((decorator) => {
    const active = useEditorSelector(
      editor,
      selectors.isActiveDecorator(decorator.name)
    );
    return (
      <Button
        key={decorator.name}
        className={`${active ? "" : "bg-pink-bg"} hover:bg-primary-light`}
        onClick={() => {
          // Send decorator toggle event
          editor.send({
            type: "decorator.toggle",
            decorator: decorator.name,
          });
          editor.send({
            type: "focus",
          });
        }}
      >
        {icons[decorator.name]}
      </Button>
    );
  });
  return <div className="ptxt-editor-tool">{decoratorButtons}</div>;
};

export default DecoratorsButtons;
