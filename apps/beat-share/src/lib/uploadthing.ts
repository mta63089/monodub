import { auth } from "@/lib/auth";
import { createUploadthing, type FileRouter } from "uploadthing/server";

const f = createUploadthing();

export const uploadRouter = {
  audioUploader: f({ audio: { maxFileSize: "16MB" } })
    .middleware(async () => {
      const user = await auth();
      if (!user) throw new Error("Unauthorized");
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete:", file.url);
      // Insert into DB, call webhook, etc.
    }),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;
