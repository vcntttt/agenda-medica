import prisma from "@/lib/prisma";
import { Date } from "@prisma/client";
import { NextResponse } from "next/server";
import { object, string, date } from "yup";

interface Segment {
  params: { id: string };
}

async function getDate(id: string): Promise<Date | null> {
  return await prisma.date.findFirst({ where: { id } });
}

export async function GET(request: Request, segments: Segment) {
  const { id } = segments.params;

  const date = await getDate(id);

  if (!date) {
    return NextResponse.json({
      message: `No se encontró la cita: ${id}`,
      status: 404,
    });
  }

  return NextResponse.json(date);
}

const putSchema = object({
  title: string().required(),
  start: date().required(),
  end: date().required(),
});

export async function PUT(request: Request, segments: Segment) {
  const { id } = segments.params;

  const date = await getDate(id);

  if (!date) {
    return NextResponse.json({
      message: `No se encontró la cita: ${id}`,
      status: 404,
    });
  }
  try {
    const { title, start, end } = await putSchema.validate(
      await request.json()
    );

    const updatedDate = await prisma.date.update({
      where: { id },
      data: {
        title,
        start,
        end,
      },
    });

    return NextResponse.json({
      message: `La cita ${id} se actualizó correctamente`,
      status: 200,
      date: updatedDate,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error al actualizar la cita",
      status: 400,
      error,
    });
  }
}
