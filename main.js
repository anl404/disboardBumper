import { Client } from 'discord.js-selfbot-v13';
import { readFile } from 'fs/promises';

const getTimestamp = () => {
  const now = new Date();
  return `[${now.toLocaleDateString()} ${now.toLocaleTimeString()}]`;
};

const config = JSON.parse(
  await readFile(new URL('./config.json', import.meta.url))
);

const client = new Client();

client.on('ready', async () => {
  console.log(`${getTimestamp()} Bot successfully logged in as ${client.user.username}.`);
  
  const channels = config.channelIds.map(channelId => 
    client.channels.cache.get(channelId)
  ).filter(channel => channel !== undefined);

  if (channels.length === 0) {
    console.error(`${getTimestamp()} ERROR: No valid channels found.`);
    return;
  }

  const sendBumpCommand = async () => {
    try {
      const randomChannel = channels[Math.floor(Math.random() * channels.length)];
      
      await randomChannel.sendSlash(config.botId, 'bump');
      console.log(`${getTimestamp()} Bump command successfully sent to channel ${randomChannel.id}.`);
    } catch (error) {
      console.error(`${getTimestamp()} FAILED to send bump command. Error details:`, error.message);
    }
  };

  const getRandomInterval = () => {
    const baseInterval = 1000 * 60 * 60 * 2;
    const randomAddition = Math.floor(Math.random() * 4000) + 1000;
    return baseInterval + randomAddition;
  };

  await sendBumpCommand();

  setInterval(sendBumpCommand, getRandomInterval());
});

client.on('error', (error) => {
  console.error(`${getTimestamp()} Client encountered a critical error:`, error.message);
});

client.login(config.token);