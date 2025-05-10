"use client"; // This directive makes the component interactive

import { deletePost } from "@/sanity/actions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import TooltipComponent from "./TooltipComponent";

export function DeleteButton({ _id }: { _id: string }) {
  const handleDelete = async () => {
    await deletePost(_id); // Call the delete logic
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <TooltipComponent text="Delete">
          <Trash2 className="size-6 text-black/60 hover:text-primary cursor-pointer" />
        </TooltipComponent>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-none shadow-xl bg-white-bg">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            post.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className="cursor-pointer" onClick={handleDelete}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

    // {/* Delete */}
  );
}
