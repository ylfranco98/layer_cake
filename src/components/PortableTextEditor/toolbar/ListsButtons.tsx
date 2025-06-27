import React from "react";
import { schemaDefinition } from "../schemaDefinition";
import { Editor, useEditorSelector } from "@portabletext/editor";
import * as selectors from "@portabletext/editor/selectors";
import { Button } from "@/components/ui/button";
import { icons } from "@/lib/icons";

interface ListsButtonsProps {
  editor: Editor;
}
export const ListsButtons: React.FC<ListsButtonsProps> = ({ editor }) => {
  // This component will contain buttons for different list types like bullet and numbered lists.
  const listButtons = schemaDefinition.lists.map((list) => {
    const active = useEditorSelector(
      editor,
      selectors.isActiveListItem(list.name)
    );
    return (
      <Button
        key={list.name}
        className={`${active ? "" : "bg-pink-bg"} hover:bg-primary-light`}
        onClick={() => {
          editor.send({
            type: "list item.toggle",
            listItem: list.name,
          });
          toggleListType(list.name); // Trigger animation effect
          editor.send({ type: "focus" });
        }}
      >
        {icons[list.name]}
      </Button>
    );
  });
  return <div className="ptxt-editor-tool">{listButtons}</div>;
};

// This function adds a temporary class to the editor element to trigger a CSS animation
const toggleListType = (listType: String) => {
  const editorElement = document.querySelector(".ptxt-editor");

  // Apply temporary animation class
  editorElement?.classList.add("switching-list");

  setTimeout(() => {
    editorElement?.classList.remove("switching-list");
  }, 300); // Matches transition duration
};
