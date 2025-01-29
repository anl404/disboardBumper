# DisboardBumper 🤖

DisboardBumper is a self-bot that allows you to automatically bump your Discord server using the Disboard bot. This bot sends the `/bump` command at regular intervals to keep your server at the top of Disboard.

## Features 🌟

- **Automatic Bump**: Automatically bumps your server using the Disboard bot at specified intervals.
- **Random Interval**: Adds a random delay between bumps to reduce the risk of detection.
- **Multiple Channel Support**: Allows bumping from multiple channels by adding multiple channel IDs.
- **Error Handling**: Logs error messages to the console and continues running in case of an error.

## Installation 🛠️

### 1. Obtaining Discord Token and Channel ID

#### Getting Your Discord Token 🔑

1. **Log in to Discord** and open the browser console (`Ctrl + Shift + I` or `F12`).

2. Paste the following code into the console and press `Enter`:

   ```javascript
   window.webpackChunkdiscord_app.push([
     [Math.random()],
     {},
     req => {
       if (!req.c) return;
       for (const m of Object.keys(req.c)
         .map(x => req.c[x].exports)
         .filter(x => x)) {
         if (m.default && m.default.getToken !== undefined) {
           return copy(m.default.getToken());
         }
         if (m.getToken !== undefined) {
           return copy(m.getToken());
         }
       }
     },
   ]);
   window.webpackChunkdiscord_app.pop();
   console.log('%cWorked!', 'font-size: 50px');
   console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
   ```

3. Your token will be automatically copied to your clipboard. Store it securely.

#### Getting Channel ID 🆔

1. **Go to the channel** you want to bump in Discord.
2. Enable **Developer Mode** under **User Settings > Advanced**.
3. Right-click the channel and select **Copy ID**.

### 2. Setting Up the Bot

1. Ensure you have **Node.js** installed. (If not, download it from [Node.js](https://nodejs.org/).)

2. Open a terminal in your project folder and install the required dependencies:

   ```bash
   npm install discord.js-selfbot-v13
   ```

3. Edit the `config.json` file:

   ```json
   {
     "token": "YOUR_DISCORD_TOKEN",
     "channelIds": ["CHANNEL_ID_1", "CHANNEL_ID_2", "CHANNEL_ID_3"],
     "botId": "302050872383242240"
   }
   ```

   - `YOUR_DISCORD_TOKEN`: Paste your Discord token here.
   - `CHANNEL_ID_X`: Add the channel IDs where you want the bumping to occur.
   - `botId`: The Disboard bot's ID (`302050872383242240`).

4. Start the bot by running:

   ```bash
   node main.js
   ```

## Usage 🚀

Once the bot is running, it will automatically bump your server at set intervals. A random delay is added between each bump to reduce the risk of detection.

### Example Output

```
[10/15/2023 14:30:45] Bot successfully logged in as YourUsername.
[10/15/2023 14:30:46] Bump command successfully sent to channel 123456789012345678.
[10/15/2023 16:30:47] Bump command successfully sent to channel 987654321098765432.
```

## Warning ⚠️

- **Using self-bots violates Discord's Terms of Service.** Use this bot at your own risk, as your account may get banned.
- Never share your token with anyone. If your token is compromised, you may lose control of your account.

## Contributing 🤝

If you would like to contribute to this project, please submit a **Pull Request**. All contributions and feedback are welcome!

## License 📜

This project is licensed under the MIT License. See the `LICENSE` file for more details.
