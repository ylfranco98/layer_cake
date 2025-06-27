"use server";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import { NextResponse } from "next/server";
import path, { basename } from "path";
// import { createReadStream } from "fs";
import { readFile } from "fs/promises";
import { createReadStream } from "fs";

const handleUpload = async ({ setTest }: any) => {
  //   const formData = new FormData();
  //   formData.append("image", file);
  //   console.log(formData);
  //   const response = await fetch("/api/upload", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   const data = await response.json();
  //   return data.asset?.url; // Get the uploaded image URL
  const filePath = path.join(process.cwd(), "public", "newpost.jpeg");

  //   try {
  //     const fileBuffer = await readFile(filePath); // Read file as buffer
  //     const assetDocument = await client.assets.upload("image", fileBuffer, {
  //       filename: "newpost.jpeg",
  //     });
  //     const img = await assetDocument;
  //     console.log("The image was uploaded!", img);
  //     return assetDocument;
  //     // assetDocument._id can now be referenced in your Portable Text
  //   } catch (error) {
  //     console.error("Upload failed:", error.message);
  //   }
  client.assets
    .upload("image", createReadStream(filePath), {
      filename: basename(filePath),
    })
    .then((imageAsset) => {
      console.log(imageAsset._id);
      setTest(imageAsset._id);
      // Here you can decide what to do with the returned asset document.
      // If you want to set a specific asset field you can to the following:
      return client
        .patch("b5ab81be-e662-4b8f-ba4d-ef95c8f09f7c")
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
};

export default handleUpload;
