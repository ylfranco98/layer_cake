import { ArrowRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BlockAnnotationRenderProps, useEditor } from "@portabletext/editor";
// import { AllSchemaNameKeys } from "~/portableText/schemaDefinition";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import UrlPopover from "@/components/UrlPopover";
import { set } from "date-fns";

const annotationName: string = "link";

export function AnnotationLink(props: BlockAnnotationRenderProps) {
  const editor = useEditor();

  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState(
    "value" in props && typeof props.value.href === "string"
      ? props.value.href
      : ""
  );
  useEffect(() => {
    setUrl(
      "value" in props && typeof props.value.href === "string"
        ? props.value.href
        : ""
    );
  }, [props]);

  console.log("render: ", url);
  return (
    // <Popover
    //   open={open}
    //   onOpenChange={(open) => {
    //     if (!open) {
    //       setOpen(false);
    //     }
    //   }}
    // >
    //   <PopoverTrigger>
    <UrlPopover
      open={open}
      setOpen={setOpen}
      url={url}
      setUrl={setUrl}
      annotationName="link"
    >
      <span
        // href={url}
        className="!text-primary !bg-prink-bg"
        onDoubleClick={() => {
          setOpen(true);
        }}
      >
        {props.children}
      </span>
    </UrlPopover>
    // </PopoverTrigger>

    // {/*

    // </PopoverTrigger> */}
    // <PopoverContent className="w-72">
    // {/* <h2 className="mb-2 text-sm font-semibold">Enter URL</h2> */}
    // <form
    //   className="space-y-3"
    //   onSubmit={() => {
    //     editor.send({
    //       type: "annotation.add",
    //       annotation: {
    //         name: annotation.name,
    //         value: {
    //           url: { value },
    //         },
    //       },
    //     });
    //     editor.send({
    //       type: "focus",
    //     });
    //   }}
    //     >
    //       <Input
    //         id="url"
    //         placeholder="Provide URL"
    //         aria-label="url"
    //         // value={url}
    //         // onChange={(e) => setUrl(e.target.value)}
    //       />
    //       <div className="flex flex-col sm:flex-row sm:justify-end">
    //         <Button size="sm" type="submit">
    //           Submit
    //         </Button>
    //       </div>
    //     </form>
    //   </PopoverContent>
    // </Popover>
  );
}
