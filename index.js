const { Client, GatewayIntentBits } = require('discord.js');


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});


const TARGET_SERVER_ID = 'SERVERID';
const MEMBER_ROLE_ID = 'ROLEID';


client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('guildMemberAdd', async (member) => {

    if (member.guild.id === TARGET_SERVER_ID) {
        try {
    
            const role = member.guild.roles.cache.get(MEMBER_ROLE_ID);
            
            if (!role) {
                console.error('member role not found');
                return;
            }

      
            await member.roles.add(role);
            console.log(`gave member tole to ${member.user.tag}`);
        } catch (error) {
            console.error('error giving role:', error);
        }
    }
});


client.login('token'); 
