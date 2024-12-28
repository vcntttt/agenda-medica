import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { dates } from "./dates";

export async function GET() {
  await prisma.event.deleteMany();

  await prisma.event.createMany({
    data: dates,
  });

  return NextResponse.json({ message: "Seeded!" });
}
