import React from "react";
import { Plus } from "lucide-react";
import Link from "next/link";

const CreatePostButton = () => {
  return (
    <Link
      // variant="outline"
      className="icon-button default-text font-font text-base !text-text flex gap-3 !py-2 rounded-md"
      href="/posts/create"
    >
      Create New Post
      <Plus className="icon" size={16} aria-hidden="true" />
    </Link>
  );
};

export default CreatePostButton;
