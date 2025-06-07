import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import { NextResponse } from "next/server";
import path from "path";
import { createReadStream } from "fs";

export async function POST(req: Request) {
  // if (!file) return;
  const filePath = path.join(process.cwd(), "public", "newpost.jpeg");

  try {
    const assetDocument = await client.assets.upload(
      "image",
      createReadStream(filePath),
      {
        filename: "newpost.jpeg",
      }
    );
    console.log("The image was uploaded!", assetDocument);
    return assetDocument;
    // assetDocument._id can now be referenced in your Portable Text
  } catch (error) {
    console.error("Upload failed:", error.message);
  }
  //   try {
  //     const formData = await req.formData(); // Parse incoming FormData
  //     const file = formData.get("image") as File;

  //     if (!file) {
  //       return NextResponse.json({ error: "No file provided" }, { status: 400 });
  //     }

  //     // Convert file to a readable stream
  //     const imageBuffer = await file.arrayBuffer();
  //     const imageStream = Buffer.from(imageBuffer);

  //     // Upload to Sanity
  //     const asset = await writeClient.assets.upload("image", imageStream, {
  //       filename: file.name,
  //     });

  //     return NextResponse.json({ asset }); // Send back uploaded image info
  //   } catch (error) {
  //     console.error("Upload failed:", error);
  //     return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  //   }
}
