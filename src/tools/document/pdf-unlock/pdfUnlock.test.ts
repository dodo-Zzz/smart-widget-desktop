import * as mupdf from "mupdf";
import { PDFDocument } from "pdf-lib";
import { expect, it } from "vitest";
import { unlockPdf } from "./pdfUnlock";

it("只接受正确的打开密码，并输出可直接打开的独立 PDF", async () => {
  const source = await PDFDocument.create();
  source.addPage([300, 400]);
  const data = await source.save();
  expect(unlockPdf(data, "example").status).toBe("unprotected");
  const pdf = new mupdf.PDFDocument(data);
  const encrypted = pdf.saveToBuffer("encrypt=aes-256,user-password=example,owner-password=owner");
  try {
    const bytes = encrypted.asUint8Array().slice();
    expect(unlockPdf(bytes, "wrong").status).toBe("invalid");
    const copy = unlockPdf(bytes, "example");
    expect(copy.status).toBe("ok");
    if (copy.status === "ok") expect((await PDFDocument.load(copy.data)).getPageCount()).toBe(1);
    expect(unlockPdf(bytes, "wrong").status).toBe("invalid");
  } finally {
    encrypted.destroy();
    pdf.destroy();
  }
});
