import * as mupdf from "mupdf";

export function unlockPdf(data: Uint8Array, password: string) {
  const pdf = new mupdf.PDFDocument(data);
  try {
    if (!pdf.needsPassword()) return { status: "unprotected" } as const;
    if (!password || !pdf.authenticatePassword(password)) return { status: "invalid" } as const;
    const output = pdf.saveToBuffer("encrypt=none,garbage");
    try {
      return { status: "ok", data: output.asUint8Array().slice() } as const;
    } finally {
      output.destroy();
    }
  } finally {
    pdf.destroy();
  }
}
