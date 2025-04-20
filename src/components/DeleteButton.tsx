"use client"; // This directive makes the component interactive

import { deletePost } from "@/sanity/actions";
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Trash2 } from "lucide-react";
// import { deletePitch } from "@/lib/actions";
// import DeleteAlertDialog from "./DeleteAlertDialog";

// const DeletePitchButton = ({ _id }: { _id: string }) => {
//   const handleDelete = async () => {
//     await deletePitch(_id); // Call the delete logic
//   };

//   return (
//     <DeleteAlertDialog action={handleDelete}>
//       <Button
//         variant="destructive"
//         size="icon"
//         className="startup-card_options startup-card_dlt"
//       >
//         <Trash2 className="size-5 text-white" />
//       </Button>
//     </DeleteAlertDialog>
//   );
// };

// export default DeletePitchButton;

import Link from "next/link";

export function DeleteButton({ _id }: { _id: string }) {
  const handleDelete = async () => {
    await deletePost(_id); // Call the delete logic
  };
  return (
    <button
      className="bg-red-50 rounded-full px-2 py-1 leading-none whitespace-nowrap text-sm font-semibold text-cyan-700"
      //   href="/studio"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}
