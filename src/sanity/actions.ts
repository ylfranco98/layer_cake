"use server";
import { PostForm } from "@/lib/types";
import { writeClient } from "./lib/write-client";
import { parseServerActionResponse } from "@/lib/utils";
import slugify from "slugify";
import { createReadStream } from "fs";
import { client } from "./lib/client";
import { basename } from "path";

export const deletePost = async (id: string) => {
  try {
    const response = await writeClient.delete(id);
  } catch (error) {
    console.error("Failed to delete post");
  }
};

export const createPost = async (state: any, form: PostForm) => {
  console.log("CREATE A POST!!!!!!");
  // const imageId = await uploadImage(); // Upload and get `_id`
  // const session = await auth();

  // if (!session)
  //   return parseServerActionResponse({
  //     error: "Not signed in",
  //     status: "ERROR",
  //   });
  // console.log(Object.fromEntries(Array.from(form)));
  const { title, category, body } = form;
  // console.log("title " + title);
  // console.log("category " + category);
  // console.log("body " + body);
  const slug = slugify(title as string, { lower: true, strict: true });

  try {
    const post = {
      title,
      // description,
      categories: category.map((cat) => ({
        _key: crypto.randomUUID(), // Generates a unique key
        _type: "reference",
        _ref: cat.value,
      })),
      // image: link,
      slug: {
        _type: slug,
        current: slug,
      },
      mainImage: {
        _type: "image",
        asset: {
          // _ref: imageId, // Reference uploaded image
        },
        alt: "Sample Image Alternative Text",
      },
      author: {
        _type: "reference",
        _ref: "c9c13a36-ea84-479e-bec5-419606735165",
      },
      body,
      publishedAt: new Date(),
    };

    const result = await writeClient.create({ _type: "post", ...post });

    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.log(error);

    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};

// FIXED FILE PATH
const filePath = "./public/tips.jpeg";

// Upload the fixed file
const uploadImage = async () => {
  console.log("Trying...");
  // client.assets
  //   .upload("image", createReadStream(filePath), {
  //     filename: basename(filePath),
  //     contentType: "image/jpeg",
  //   })
  //   .then((imageAsset) => {
  //     console.log("Uploaded Image:", imageAsset);
  //   });
  // const filePath = '/Users/mike/images/bicycle.jpg'

  client.assets
    .upload("image", createReadStream(filePath), {
      filename: basename(filePath),
    })
    .then((imageAsset) => {
      return client
        .patch("iAiLH53sPw1I9Nw3Sdm07L")
        .set({
          mainImage: {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: imageAsset._id,
            },
          },
        })
        .commit();
    })
    .then(() => {
      console.log("Done!");
    });
  //   // return asset._id; // Returns the `_id` needed for reference
  // } catch (error) {
  //   console.error("Image Upload Error:", error);
  // }
};
