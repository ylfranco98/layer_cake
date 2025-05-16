import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

const CreatePostButton = () => {
  return (
    <Button
      variant="outline"
      className="icon-button default-text font-font text-base !text-text"
    >
      Create New Post
      <Plus className="icon" size={16} aria-hidden="true" />
    </Button>
  );
};

export default CreatePostButton;
