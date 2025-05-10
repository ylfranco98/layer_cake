"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { HeartFilledIcon, HeartIcon } from "@sanity/icons";
import TooltipComponent from "../TooltipComponent";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  return (
    <TooltipComponent text="Like">
      <Button
        className="bg-transparent shadow-none hover:bg-transparent !p-0 gap-1 font-semibold interact-icon"
        onClick={(event) => {
          setLiked((prev) => !prev);
          setLikes((prev) => ++prev);
        }}
      >
        {liked ? (
          <HeartFilledIcon className="size-7 text-primary font-bold" />
        ) : (
          <HeartIcon className="size-7" />
        )}
        {likes}
      </Button>
    </TooltipComponent>
  );
};

export default LikeButton;
