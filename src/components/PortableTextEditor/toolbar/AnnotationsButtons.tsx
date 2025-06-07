import React from "react";
import { schemaDefinition } from "../schemaDefinition";
import { Editor, useEditorSelector } from "@portabletext/editor";
import * as selectors from "@portabletext/editor/selectors";
import { Button } from "@/components/ui/button";
import { icons } from "@/lib/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { el } from "date-fns/locale";
import { set } from "date-fns";
import UrlPopover from "@/components/UrlPopover";

interface AnnotationsButtonsProps {
  editor: Editor;
}
const AnnotationsButtons: React.FC<AnnotationsButtonsProps> = ({ editor }) => {
  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = React.useState("");
  const annotationButtons = schemaDefinition.annotations.map((annotation) => {
    const active = useEditorSelector(
      editor,
      selectors.isActiveAnnotation(annotation.name)
    );

    return (
      // <Popover
      //   key={annotation.name}
      //   open={open}
      //   onOpenChange={(open) => {
      //     if (!open) {
      //       setOpen(false);
      //     }
      //   }}
      // >
      //   {/* open={open} onOpenChange={setOpen} */}
      //   <PopoverTrigger asChild>
      <div key={annotation.name}>
        <UrlPopover
          id={annotation.name}
          open={open}
          setOpen={setOpen}
          url={url}
          setUrl={setUrl}
          annotationName={annotation.name}
        >
          <Button
            key={annotation.name}
            className={`${active ? "bg-primary" : "bg-pink-bg"} hover:bg-primary-light`}
            onClick={() => {
              const selectedText = selectors.getSelectionText(
                editor.getSnapshot()
              );

              selectedText.replaceAll(" ", "") === ""
                ? setOpen(false)
                : setOpen(true);
            }}
          >
            {icons[annotation.name]}
          </Button>
        </UrlPopover>
      </div>
      /* //   </PopoverTrigger> */
      /* //   <PopoverContent className="pointer-events-auto">
      //     <div className="bg-primary-light rounded-lg">
      //       <form */
      /* //         className="space-y-3"
      //         onSubmit={() => {
      //           setOpen(false);
      //           editor.send({
      //             type: "annotation.add",
      //             annotation: {
      //               name: annotation.name,
      //               value: annotation.name === "link" ? { href: url } : {},
      //             },
      //           });
      //           editor.send({
      //             type: "focus",
      //           });
      //           setUrl("");
      //         }}
      //       >
      //         <Input
      //           id="url"
      //           placeholder="Provide URL"
      //           aria-label="url"
      //           value={url}
      //           onChange={(e) => setUrl(e.target.value)}
      //           className="!z-200"
      //         />
      //         <div className="flex flex-col sm:flex-row sm:justify-end">
      //           <Button size="sm" type="submit">
      //             Submit
      //           </Button>
      //         </div>
      //       </form>
      //     </div>
      //   </PopoverContent>
      // </Popover> */
    );
  });
  return <div className="ptxt-editor-tool">{annotationButtons}</div>;
};

export default AnnotationsButtons;
