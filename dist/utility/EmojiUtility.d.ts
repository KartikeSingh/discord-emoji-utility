import { Client } from 'discord.js';
declare const _default: {
    new (): {};
    /**
     * Check if a string is a valid emoji
     * @param {Client} client Your discord client
     * @param {string} emoji The emoji text, ex: ❤, <:smort:883939363925418005>
     * @returns {Boolean} Whether its a valid emoji or not
     */
    isEmoji(client: Client, emoji: string): boolean;
    /**
     * Get a identifier of a emoji string
     * @param {Client} client Your discord client
     * @param {string} emoji The emoji text, ex: ❤, <:smort:883939363925418005>
     * @returns {string} Either emoji.name (ex: ❤) or emoji.id (ex:883939363925418005)
     */
    getEmojiIdentifier(client: Client, emoji: string): string | undefined;
    /**
    * Get a emoji in string form
    * @param {Client} client Your discord client
    * @param {string} emoji The emoji text, ex: ❤, <:smort:883939363925418005>, 883939363925418005
    * @returns {string} Its valid string form ex: <:smort:883939363925418005>
    */
    getEmojiString(client: Client, emoji: string): string | undefined;
    /**
    * Get a emoji
    * @param {Client} client Your discord client
    * @param {string} emoji The emoji text, ex: ❤, <:smort:883939363925418005>, 883939363925418005
    * @returns {Emoji} A discord emoji
    */
    getEmoji(client: Client, emoji: string): import("discord.js").GuildEmoji | {
        name: string;
        toString: () => string;
    } | undefined;
    /**
     * Get list of all emojis from a string
     * @param {Client} client Your discord client
     * @param {string} string The text from which you want to get the emojis, ex: Hello ❤, Dude its so easy <:smort:883939363925418005>, Wanna do force 883939363925418005 search?
     * @param {'string' | 'data'} returnType what do you want in return
     * @param {Boolean} multiple Whether you want to get more than 1 results
     * @returns {string[] | Emoji[]} The emojis in the string
     */
    parseEmoji(client: Client, string: string, returnType?: string, multiple?: boolean): (string | import("discord.js").GuildEmoji | {
        name: string;
        toString: () => string;
    })[];
};
export = _default;
