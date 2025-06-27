import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEditor } from "@portabletext/editor";
import { set } from "date-fns";

interface UrlPopoverProps {
  id?: string;
  open: boolean;
  annotationName: string;

  children?: React.ReactNode;
  setOpen: (open: boolean) => void;
  url: string;
  setUrl: (url: string) => void;
}
// This component is a placeholder for the UrlPopover functionality.
const UrlPopover: React.FC<UrlPopoverProps> = ({
  children,
  id,
  open,
  annotationName,
  setOpen,
  url,
  setUrl,
}) => {
  const editor = useEditor();
  console.log("popover: ", url);
  return (
    <Popover
      key={id}
      open={open}
      onOpenChange={(open) => {
        if (!open) {
          setOpen(false);
          setUrl("");
        }
      }}
    >
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="pointer-events-auto bg-primary-light rounded-md border-none shadow-lg">
        <form
          onSubmit={() => {
            setOpen(false);
            editor.send({
              type: "annotation.add",
              annotation: {
                name: annotationName,
                value: annotationName === "link" ? { href: url } : {},
              },
            });
            editor.send({
              type: "focus",
            });
            setUrl("");
          }}
        >
          <div className="flex items-center gap-3 justfy-center">
            <Input
              id="url"
              placeholder="Provide URL"
              aria-label="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="dialog-input !shadow-sm"
            />

            <Button size="sm" type="submit">
              Submit
            </Button>
          </div>
        </form>
        {/* </div> */}
      </PopoverContent>
    </Popover>
  );
};

export default UrlPopover;
