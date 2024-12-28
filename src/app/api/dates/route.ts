import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { date, object, string } from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = searchParams.get("take") || "10";
  const skip = searchParams.get("skip") || "0";

  if (isNaN(+take)) {
    return NextResponse.json({
      message: "take debe ser un número",
      status: 400,
    });
  }

  if (isNaN(+skip)) {
    return NextResponse.json({
      message: "skip debe ser un número",
      status: 400,
    });
  }

  const dates = await prisma.event.findMany({
    take: +take,
    skip: +skip,
  });
  return NextResponse.json(dates);
}

const postSchema = object({
  title: string().required(),
  start: date().required(),
  end: date().required(),
});

export async function POST(request: Request) {
  try {
    const { title, start, end } = await postSchema.validate(
      await request.json()
    );
    const date = await prisma.event.create({
      data: {
        title,
        start,
        end,
      },
    });
    return NextResponse.json({
      message: "La cita se creó correctamente",
      status: 201,
      date,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error al crear la cita",
      status: 400,
      error,
    });
  }
}