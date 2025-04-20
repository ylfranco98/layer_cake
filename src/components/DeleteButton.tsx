"use client"; // This directive makes the component interactive

import { deletePost } from "@/sanity/actions";

import Link from "next/link";

export function DeleteButton({ _id }: { _id: string }) {
  const handleDelete = async () => {
    await deletePost(_id); // Call the delete logic
  };
  return (
    <button
      className="bg-red-50 rounded-full px-2 py-1 leading-none whitespace-nowrap text-sm font-semibold text-cyan-700"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}
