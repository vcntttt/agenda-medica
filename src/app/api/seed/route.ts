import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { dates } from "./dates";


export async function GET() {

  await prisma.date.deleteMany();

  await prisma.date.createMany({
    data: dates
  })

  return NextResponse.json({ message: "Seeded!" });
}
