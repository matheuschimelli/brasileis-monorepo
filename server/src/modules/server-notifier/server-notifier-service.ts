import TelegramBot from 'node-telegram-bot-api';

const token = process.env.TELEGRAM_API_KEY;
const adminId = 878446753;

const bot = new TelegramBot(token!, { polling: true });

export const initTelegramBot = () => {
    if (!token) throw new Error("Missing Telegram API KEY to enable server notifications")

    bot.onText(/\/echo (.+)/, (msg, match) => {

        console.log(msg)
        console.log(match)

        const chatId = msg.chat.id;
        const resp = match![1]; // the captured "whatever"

        // send back the matched "whatever" to the chat
        bot.sendMessage(chatId, resp);
    });

    // Listen for any kind of message. There are different kinds of
    // messages.
    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        console.log(chatId)
        console.log(msg.chat)

        // send a message to the chat acknowledging receipt of their message
        bot.sendMessage(chatId, 'Received your message');
    });
}

export const sendAlertToTelegram = (msg: string) => {
    bot.sendMessage(adminId, msg);
}