import axios from 'axios'
import { Notification } from '../types'
const HOOK_URL = process.env.SLACK_HOOK_NOTIFIER

export async function notify(params: Notification) {
  if (!HOOK_URL) throw new Error('Slack Hook URL not found on process.env. Check: SLACK_HOOK_NOTIFIER env var')
  let hook
  if (params.error === false) {
    hook = {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: ':heavy_check_mark: Sucesso',
            emoji: true
          }
        },
        {
          type: 'section',
          text: {
            type: 'plain_text',
            text: `O crawler ${params.crawler.name} foi executado com sucesso!`,
            emoji: true
          }
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '*Detalhes do crawler:*'
          }
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `id: ${params.crawler.id}\n nome: ${params.crawler.name}`
          }
        }

      ]
    }
  } else {
    hook = {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: ':x: Erro ',
            emoji: true
          }
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `O crawler ${params.crawler.name} *não* foi executado com sucesso!`
          }
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '*Detalhes do crawler:*'
          }
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `id: ${params.crawler.id}\n nome: ${params.crawler.name}`
          }
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '*Detalhes do erro:*'
          }
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '`' + params.errorMsg + '`'
          }
        }
      ]
    }
  }
  try {
    await axios.post(HOOK_URL!, hook)
  } catch (error) {
    console.log(error)
  }
}
