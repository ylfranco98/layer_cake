// import "server-only";

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, token } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token:
    "skkMAd7k4TL7aiGiPyPcuidCKNb320WqRity8422T1F7u62Gi7hoZk3oYO1kIEs7EeYzEYBB3VHpYIVSfTXg0lB4qsCcb0JNFTpQZmKv1hHdVka14lMPuHu49RQ83S3TSihqZ1pbRgqsDsWhObpLXqFQCpOdSb80nwtz4EdxEkYDIqi2tVTK",
});
const wc = !writeClient.config().token;
console.log(!writeClient.config().token);

if (wc) {
  console.log("!writeClient.config().token");
  // throw new Error("Write token not found.");
}
