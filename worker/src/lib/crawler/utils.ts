//@ts-nocheck
import { Readability, isProbablyReaderable } from '@mozilla/readability';
import { JSDOM } from 'jsdom';
import sanitizeHtml from 'sanitize-html';

export function cleanHtml(html: string, url: string) {
  var doc = new JSDOM(html, {
    url: url
  });


  let reader = new Readability(doc.window.document);
  let webPage = reader.parse();
  return {
    htmlContent: normalizeHtml(sanitizeHtml(webPage?.content)),
    textContent: normalizeString(normalizeHtml(sanitizeHtml(webPage?.textContent))),
  }
}



// export function sanitizeHtml(html: string): string {
//   const window = new JSDOM('').window;
//   const DOMPurify = createDOMPurify(window);

//   const clean = DOMPurify.sanitize(html);
//   return clean
// }
export function normalizeString(str: string) {
  return str.toLowerCase()
    .replace(/(\r\n|\n|\r)/gm, ' ')
    .replace(/\s{2,}/g, ' ')
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .replace(/[§:;,.]/g, '')
    .replace(/[/()-]/g, ' ') // .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

export function normalizeHtml(html: string) {
  return html.replace(/(\r\n|\n|\r)/gm, ' ')
    .replace(/([/\\\\]t)/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim()
}