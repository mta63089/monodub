import { s3 } from "@/lib/minio";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const file = data.get("file") as File;

  if (!file)
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}-${file.name}`;

  await s3.send(
    new PutObjectCommand({
      Bucket: process.env.MINIO_BUCKET!,
      Key: filename,
      Body: buffer,
      ContentType: file.type,
    })
  );

  return NextResponse.json({
    url: `${process.env.MINIO_ENDPOINT}/${process.env.MINIO_BUCKET}/${filename}`,
  });
}
