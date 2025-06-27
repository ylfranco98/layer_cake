import React from "react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import NewPostForm from "../NewPostForm";

const CreatePostButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="icon-button default-text font-font text-base !text-text "
          // href="/posts/create"
        >
          Create New Post
          <Plus className="icon" size={16} aria-hidden="true" />
        </Button>
      </DialogTrigger>
      <DialogContent className=" flex !w-full pink-container !max-w-full !max-h-full !p-0 !m-0 !border-none !rounded-lg fadeIn animatePopIn">
        {/* overflow-y-visible sm:max-w-lg*/}

        <img
          className="size-full object-cover h-full w-fit rounded-l-lg"
          src="newpost.jpeg"
          alt={"Newspaper with pastries"}
          width={512}
          height={96}
        />
        <div className="flex flex-col gap-0  p-0  [&>button:last-child]:top-3.5 w-full overflow-y-auto max-h-full">
          <DialogHeader className="contents space-y-0 text-left">
            <DialogTitle className=" px-6 py-4 mt-4 text-2xl font-font text-text">
              Create New Post
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="sr-only">
            Make changes to your profile here. You can change your photo and set
            a username.
          </DialogDescription>
          {/* <NewPostForm /> */}
          <DialogFooter className="px-6 py-4">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="button">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostButton;
