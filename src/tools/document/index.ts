import largeFile from "./large-file";
import type { Category } from "../types";
import wordToPdf from "./word-to-pdf";
import wordToMarkdown from "./word-to-markdown";
import pdfToWord from "./pdf-to-word";
import wordWatermark from "./word-watermark";
import wordUnwatermark from "./word-unwatermark";
import pdfEditor from "./pdf-content-editor";
import pdfPages from "./pdf-page-manager";
import pdfUnwatermark from "./pdf-unwatermark";
import pdfUnlock from "./pdf-unlock";

const document: Category = {
  id: "document",
  name: "文档",
  tools: [largeFile, wordToPdf, wordToMarkdown, pdfToWord, wordWatermark, wordUnwatermark, pdfEditor, pdfPages, pdfUnwatermark, pdfUnlock],
};

export default document;
