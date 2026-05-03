import { NextResponse } from "next/server";
import { submissionSchema } from "@/lib/submitSchema";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = submissionSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid input", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { error } = await supabaseAdmin.from("submissions").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      message: parsed.data.message,
      source: "website",
    });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}

