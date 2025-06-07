"use client";
import React, { useActionState, useEffect } from "react";

import { useId, useState } from "react";
import { CheckIcon, ImagePlusIcon, XIcon } from "lucide-react";

import { useCharacterLimit } from "@/hooks/use-character-limit";
import { useFileUpload } from "@/hooks/use-file-upload";
import { components } from "@/sanity/portableTextComponents";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ImageUpload from "./ImageUpload";
import CategoryFilter from "./PostsPage/CategoryFilter";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import PortableTextEditor from "./PortableTextEditor/PortableTextEditor";
import EditorContext from "./PortableTextEditor/EditorContext";
import AnnotationsButtons from "./PortableTextEditor/toolbar/AnnotationsButtons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import CalendarPicker from "./CalendarPicker";
import { Option } from "@/components/ui/multiselect";
import { PostForm } from "@/lib/types";
import { createPost } from "@/sanity/actions";

const NewPostForm = () => {
  const id = useId();
  const [content, setContent] = useState();
  const maxLength = 180;

  const [formState, setState] = useState<PostForm>({
    title:
      // post?.title ||
      "",
    // description: post?.description || "",
    category:
      //  post?.category ||
      [],
    // link: post?.image || "",
    body: [],
  });

  // useEffect(() => {

  // }, [formState]);

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      // Manually add values from formState
      // formData.append("category", JSON.stringify(formState.category)); // Ensure array gets stored
      // formData.append(
      //   "category",
      //   JSON.stringify(
      //     formState.category.map((cat) => ({
      //       _type: "reference",
      //       _ref: cat.value, // Assuming `cat` is already an ID
      //     }))
      //   )
      // );
      // formData.append("body", JSON.stringify(formState.body)); // Handle complex input
      const formValues = {
        title: formData.get("title") as string,
        // description: formData.get("description") as string,
        category: formData.get("category") as string,
        body: formData.get("body") as string,
        // link: formData.get("link") as string,
        // pitch,
      };
      console.log(formData);
      // await formSchema.parseAsync(formValues);

      const result =
        // post?._id
        //   ? await updatePitch(prevState, formData, pitch, post._id)
        // :
        await createPost(prevState, formState);

      // if (result.status == "SUCCESS") {
      //   toast.success(
      //     "Your startup pitch has been created successfully"
      //     //{ title: "Success",
      //     // description: "Your startup pitch has been created successfully",}
      //   );

      //   router.push(`/startup/${result._id}`);
      // }

      return result;
    } catch (error) {
      // if (error instanceof z.ZodError) {
      //   const fieldErorrs = error.flatten().fieldErrors;

      //   setErrors(fieldErorrs as unknown as Record<string, string>);

      //   toast.error(
      //     "Please check your inputs and try again"

      //     //{ title: "Error",
      //     // description: "Please check your inputs and try again",
      //     // variant: "destructive",}
      //   );

      return { ...prevState, error: "Validation failed", status: "ERROR" };
    }

    // toast.error(
    //   "An unexpected error has occurred"
    //   // { title: "Error",
    //   // description: "An unexpected error has occurred",
    //   // variant: "destructive",}
    // );

    return {
      ...prevState,
      error: "An unexpected error has occurred",
      status: "ERROR",
    };
    // }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });
  return (
    <div className="scrollbar-thumb-primary scrollbar-thumb-rounded-ful scrollbar-track-primary-light scrollbar-track-rounded-ful scrollbar-thin h-full overflow-y-auto">
      <div className="flex flex-col">
        <div className="px-6 pt-4 pb-6 ">
          <form
            className="space-y-4 grid grid-rows-[auto_auto_auto_1fr] h-[calc(100vh-190px)]"
            // onSubmit={(e) => {
            //   e.preventDefault(); // Prevents unwanted page reload
            //   // handleSubmit(); // Call the function that handles the submission
            // }}
            action={formAction}
          >
            {/* <div className="flex flex-col gap-4"> */}
            {/* <div className="flex-1 space-y-2"> */}
            {/* <div className="grid grid-rows-[auto_auto_auto_1fr] h-screen bg-red-500"> */}

            <div>
              <Input
                id="title"
                name="title"
                placeholder="Enter Post Title"
                value={formState?.title} // Tied to state
                onChange={(e) =>
                  setState({ ...formState, title: e?.target?.value || "" })
                } // Update via formAction
                // defaultValue="Margaret"
                type="text"
                required
                className="dialog-input !py-[22px]"
              />
            </div>

            {/* </div> */}
            {/* <div className="flex-1 space-y-2"> */}

            {/* </div> */}
            {/* <div className="*:not-first:mt-2"> */}
            <div>
              <CategoryFilter formState={formState} setState={setState} />
            </div>
            <div>
              <ImageUpload />
            </div>
            <div>
              <EditorContext formState={formState} setState={setState} />
            </div>
            {/* </div> */}
            {/* <PortableText value={[]} components={components} /> */}
            <Button type="submit">Save changes</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPostForm;
