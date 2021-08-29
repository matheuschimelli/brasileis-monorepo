async function getCleanHTML (elementSelector) {
  return new Promise((resolve, reject) => {
    const parser = new DOMParser()
    const pageHTMLSOurce = document.querySelector(elementSelector).innerHTML
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
        var pa = anchor.parentNode
        while (anchor.firstChild) {
          pa.insertBefore(anchor.firstChild, anchor)
        }
        pa.removeChild(anchor)
      }
    }
    function removeHtmlElement (element) {
      var el = elToGetAttrRemoved.querySelectorAll(element)
      for (var i = 0; i < el.length; i++) {
        el[i].parentNode.removeChild(el[i])
      }
    }
    function rmSpaceBreak (str) {
      return str.replace(/(\r\n|\n|\r)/gm, ' ').replace(/\s{2,}/g, ' ').replace(/[\u200B-\u200D\uFEFF]/g, '').trim()
    }
    removeHTMLAttrs()
    removeAnchorKeepText()
    removeHtmlElement('img')
    removeHtmlElement('iframe')

    const htmlContentToBeFixed = rmSpaceBreak(elToGetAttrRemoved.body.innerHTML)
    const decretosMatch = htmlContentToBeFixed.match(decretosRegex)

    var textToBeReplaced = htmlContentToBeFixed

    function findAndFixText (wordFound) {
      return new Promise((resolve, reject) => {
        textToBeReplaced = textToBeReplaced.replace(wordFound, `<a href='/finder?term=${wordFound}'>${wordFound}</a>`)
        resolve()
      }
      )
    }

    async function findAndReplace (matches) {
      if (matches) {
        var nArray = matches.filter(function (item, pos) {
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
    }
    )
  }
  )
}
getCleanHTML('#dvRich').then((e) => console.log(e))
