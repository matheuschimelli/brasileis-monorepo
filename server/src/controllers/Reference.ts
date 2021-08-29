import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Readability } from '@mozilla/readability'
import { JSDOM } from 'jsdom'
import Law from '../models/Law'
// import nlp from 'compromise'

async function getCleanHTML (elementSelector: any) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    const parser = new DOMParser()
    const pageHTMLSOurce = elementSelector.innerHTML
    const elToGetAttrRemoved = parser.parseFromString(pageHTMLSOurce, 'text/html')
    const anchors = Array.from(elToGetAttrRemoved.querySelectorAll('a'))
    const htmlElements = ['h1', 'h2', 'div', 'p', 'b', 'a', 'span']
    const decretosRegex = /((decreto)|(lei)(artigo))+( )+(\d+(\.\d{2,4})?)+(,| |\.)+(de|do|da)+( )+(((\d+)-(\d+)-(\d+))|((\d+)\/(\d+)\/(\d+))|((\d+) de (\d+) de (\d+)))/gi

    function removeHTMLAttrs () {
      for (const singleElment of htmlElements) {
        const p = Array.from(elToGetAttrRemoved.querySelectorAll(singleElment))
        for (const el of p) {
          for (var i = el.attributes.length - 1; i >= 0; i--) {
            el.removeAttribute(el.attributes[i].name)
          }
        }
      }
    }
    function removeAnchorKeepText () {
      for (const anchor of anchors) {
        var parentEl = anchor.parentNode
        while (anchor.firstChild) {
            parentEl!.insertBefore(anchor.firstChild, anchor)
        }
          parentEl!.removeChild(anchor)
      }
    }
    function removeHtmlElement (element: string) {
      var el = elToGetAttrRemoved.querySelectorAll(element)
      for (var i = 0; i < el.length; i++) {
          el[i].parentNode!.removeChild(el[i])
      }
    }
    function rmSpaceBreak (str:string) {
      return str.replace(/(\r\n|\n|\r)/gm, ' ').replace(/\s{2,}/g, ' ').replace(/[\u200B-\u200D\uFEFF]/g, '').trim()
    }
    removeHTMLAttrs()
    removeAnchorKeepText()
    removeHtmlElement('img')
    removeHtmlElement('iframe')

    const htmlContentToBeFixed = rmSpaceBreak(elToGetAttrRemoved.body.innerHTML)
    const decretosMatch = htmlContentToBeFixed.match(decretosRegex)

    var textToBeReplaced = htmlContentToBeFixed

    function findAndFixText (wordFound: string) {
      return new Promise<void>((resolve, reject) => {
        textToBeReplaced = textToBeReplaced.replace(wordFound, `<a href='/finder?term=${wordFound}' id="lawReference">${wordFound}</a>`)
        resolve()
      }
      )
    }

    async function findAndReplace (matches: any) {
      if (matches) {
        var nArray = matches.filter(function (item: any, pos: any) {
          return matches.indexOf(item) === pos
        })
        for (const found of nArray) {
          await findAndFixText(found)
        }
      }
    }

    findAndReplace(decretosMatch).then(() => {
      resolve(textToBeReplaced)
      // document.querySelector("#dvRich").innerHTML = textToBeReplaced
    })
  }
  )
}
// @ts-ignore
function sanitizeString (str: string) {
  return str.toLowerCase()
    .replace(/(\r\n|\n|\r)/gm, ' ')
    .replace(/\s{2,}/g, ' ')
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .replace(/[§:;,.]/g, '')
    .replace(/[/()-]/g, ' ') // .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim()
}
export default class ReferenceController {
  async show (req: Request, res: Response) {
    const { slug } = req.query

    try {
      const lawRepo = getRepository(Law)
      const law = await lawRepo.findOne({
        // select: ['url', 'updatedAt', 'categories', 'subCategories', 'slug', 'htmlContent', 'title'],
        where: {
          slug: slug
        },
        select: ['title', 'slug', 'htmlContent', 'textContent']
      })
      if (law) {
        const doc = new JSDOM(law.htmlContent, {
          url: law.url
        })
        const reader = new Readability(doc.window.document)
        const article = reader.parse()
        // @ts-ignore
        return res.send({ law, content: article.content, title: article.title })
      } else {
        return res.send({ success: false, message: 'Nada encontrado' })
      }
    } catch (error) {
      console.log(error)
      return res.status(404).json({ message: 'Nada encontrado.' })
    }
  }
}
