import { Client, Emoji } from 'discord.js';
import { get, hasEmoji } from 'node-emoji';

export = class EmojiUtility {
    /**
     * Check if a string is a valid emoji
     * @param {Client} client Your discord client
     * @param {string} emoji The emoji text, ex: ❤, <:smort:883939363925418005>
     * @returns {Boolean} Whether its a valid emoji or not
     */
    static isEmoji(client: Client, emoji: string) {
        return hasEmoji(emoji + "") || client.emojis.cache.has(/\d+/.exec(emoji) + "");
    }

    /**
     * Get a identifier of a emoji string
     * @param {Client} client Your discord client
     * @param {string} emoji The emoji text, ex: ❤, <:smort:883939363925418005>
     * @returns {string} Either emoji.name (ex: ❤) or emoji.id (ex:883939363925418005)
     */
    static getEmojiIdentifier(client: Client, emoji: string) {
        return hasEmoji(emoji + "") ? get(emoji + "") : client.emojis.cache.get(/\d+/.exec(emoji) + "")?.id;
    }

    /**
    * Get a emoji in string form
    * @param {Client} client Your discord client
    * @param {string} emoji The emoji text, ex: ❤, <:smort:883939363925418005>, 883939363925418005
    * @returns {string} Its valid string form ex: <:smort:883939363925418005>
    */
    static getEmojiString(client: Client, emoji: string) {
        return hasEmoji(emoji + "") ? get(emoji + "") : client.emojis.cache.get(/\d+/.exec(emoji) + "")?.toString();
    }

    /**
    * Get a emoji
    * @param {Client} client Your discord client
    * @param {string} emoji The emoji text, ex: ❤, <:smort:883939363925418005>, 883939363925418005
    * @returns {Emoji} A discord emoji
    */
    static getEmoji(client: Client, emoji: string) {
        return hasEmoji(emoji + "") ? { name: get(emoji + ""), toString: () => get(emoji + "") } : client.emojis.cache.get(/\d + /.exec(emoji) + "");
    }

    /**
     * Get list of all emojis from a string
     * @param {Client} client Your discord client
     * @param {string} string The text from which you want to get the emojis, ex: Hello ❤, Dude its so easy <:smort:883939363925418005>, Wanna do force 883939363925418005 search?
     * @param {'string' | 'data'} returnType what do you want in return
     * @param {Boolean} multiple Whether you want to get more than 1 results
     * @returns {string[] | Emoji[]} The emojis in the string
     */
    static parseEmoji(client: Client, string: string, returnType = 'string', multiple = true) {
        const words = string?.split(" ") || [],
            emojis = [];

        for (let i = 0; i < words.length; i++) {
            const emo = returnType === "data" ? this.getEmoji(client, words[i]) : this.getEmojiString(client, words[i]);

            if (emo) {
                emojis.push(emo);
                if (!multiple) break;
            }
        }

        return emojis;
    }
}