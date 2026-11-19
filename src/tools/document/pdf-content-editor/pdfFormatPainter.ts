import type { PdfEditObject } from "./pdfEditorModel";

export type PdfTextFormat = Pick<PdfEditObject,
  "fontId" | "fontSize" | "color" | "opacity" | "lineHeight" | "characterSpacing" | "horizontalScale"
>;

export function copyTextFormat(item: PdfEditObject): PdfTextFormat {
  return {
    fontId: item.fontId,
    fontSize: item.fontSize,
    color: item.color,
    opacity: item.opacity,
    lineHeight: item.lineHeight,
    characterSpacing: item.characterSpacing,
    horizontalScale: item.horizontalScale,
  };
}
