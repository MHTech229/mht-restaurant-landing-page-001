import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // true pour 465, false pour 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `Nouvelle réservation de ${data.name}`,
      html: `
        <p><strong>Nom:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Téléphone:</strong> ${data.phone}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });

    return NextResponse.json({ message: "Email envoyé avec succès !" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi." },
      { status: 500 }
    );
  }
}
