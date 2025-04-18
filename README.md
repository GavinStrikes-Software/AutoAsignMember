# Discord Member Role Bot

A Simple Discord bot that automatically assigns the member role to new users when they join a specific server.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a new Discord bot:
   - Go to the [Discord Developer Portal](https://discord.com/developers/applications)
   - Create a new application
   - Go to the "Bot" section and create a bot
   - Copy the bot token

3. Configure the bot:
   - Open `index.js`
   - Replace `token` with your bot's token
   - The server ID and role ID are already configured

4. Invite the bot to your server:
   - Go to the OAuth2 section in the Developer Portal
   - Generate an invite URL with the following permissions:
     - bot
     - Manage Roles

5. Run the bot:
```bash
npm start
```


## Requirements

- Node.js
- npm
- Discord.js v14 
