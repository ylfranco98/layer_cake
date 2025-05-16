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
          // <svg
          //   // viewBox="0 0 25 25"
          //   focusable="false"
          //   // class="chakra-icon css-bokek7"
          //   className="!w-[36px] bg-primary !h-[36px]"
          //   aria-hidden="true"
          // >
          //   <path
          //     d="M20 5.75358C20 3.41128 18.702 1.36306 16.6924 0.547224C14.7688 -0.23367 12.3477 0.1695 10 2.23089C7.65232 0.1695 5.2312 -0.2336 3.30761 0.54737C1.29797 1.36327 0 3.41156 0 5.75386C0 7.12866 0.667416 8.55743 1.57299 9.88042C2.48765 11.2167 3.69628 12.5181 4.88799 13.6523C6.48052 15.168 8.19555 16.5655 10 17.8235C10.3256 17.5966 10.6487 17.3678 10.9671 17.1308C9.16182 15.7422 7.35301 14.3766 5.70024 12.8036C4.53902 11.6984 3.3947 10.4608 2.54466 9.21897C1.68553 7.96382 1.17647 6.77525 1.17647 5.75386C1.17647 3.83627 2.23145 2.25102 3.75121 1.63401C5.24506 1.02751 7.35824 1.29569 9.59089 3.45082L10 3.84574L10.4091 3.45082C12.6418 1.29568 14.755 1.02744 16.2488 1.63388C17.7686 2.25083 18.8235 3.83599 18.8235 5.75358C18.8235 6.77497 18.3145 7.96356 17.4553 9.21875C16.6053 10.4606 15.461 11.6982 14.2998 12.8035C13.4715 13.5917 12.6422 14.3057 11.9178 14.8981L12.8726 15.6336C13.564 15.0617 14.3375 14.3893 15.112 13.6522C16.3037 12.5179 17.5124 11.2165 18.427 9.88018C19.3326 8.55717 20 7.12839 20 5.75358Z"
          //     fill="currentColor"
          //   ></path>
          // </svg>
        )}
        {likes}
      </Button>
    </TooltipComponent>
  );
};

export default LikeButton;
