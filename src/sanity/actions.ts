import { writeClient } from "./lib/write-client";

export const deletePost = async (id: string) => {
  try {
    const response = await writeClient.delete(id);
    console.log("Post deleted:", response);
  } catch (error) {
    console.error("Failed to delete post");
    console.log(error);
  }
};
