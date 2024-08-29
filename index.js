/*
author: Caleb Smithson
date: i dont remember, a while ago

Yui took me 3 weeks to program the first few commands in her code, and i need to remove a few parts
i.e. "I'm sorry massa" :3


*/
require('dotenv').config();

const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});
client.on('ready', () => {
    console.log(`${client.user.tag} is online.`);

    client.user.setActivity({
        name: 'the day fade to night, waiting.',
        type: ActivityType.Watching,
        // url only used when i feel like making it say "streaming"
        url: 'https://www.youtube.com/watch?v=K2VzuA6UZ7A',
    });
});
const welcomeChannelId = '1278838995534610453'; // Replace with the actual channel ID
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
    const welcomeMessage = `Hi, I'm Yui! Welcome to the server ${member.user.username}! I can't wait to get to know you!`;
    const channel = member.guild.channels.cache.get(welcomeChannelId);
    if (channel) {
        channel.send(welcomeMessage);
    }
});
client.on('guildMemberRemove', member => {
    const farewellMessage = `It's really sad that ${member.user.username} left. I'll miss them.`;
    const channel = member.guild.channels.cache.get(welcomeChannelId);
    if (channel) {
        channel.send(farewellMessage);
    }
});

client.on('messageCreate', async (message) => {
    const Father = '644702208218365965';
    const coFather = '671192089807159327';
    const NspecificUserId = '681262436698947593';
    const stepFather = '638931939247652894';

    // Ignore messages from bots
    if (message.author.bot) {
        return;
        
    }


    // if anyone tries talking to Yui,
    // CALEB ADD MORE WHEN YOU CAN. MOVE PAST BASIC CONVERSATION (add a comment below marking the date you actually do something) 06-03-2024
    if (message.content.toLowerCase() === "hey yui, tell me about vaporeon")
        {
            message.reply("Of course, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans? Not only are they in the field egg group, which is mostly comprised of mammals, Vaporeon are an average of 3”03’ tall and 63.9 pounds, this means they’re large enough to be able handle human dicks, and with their impressive Base Stats for HP and access to Acid Armor, you can be rough with one. Due to their mostly water based biology, there’s no doubt in my mind that an aroused Vaporeon would be incredibly wet, so wet that you could easily have sex with one for hours without getting sore. They can also learn the moves Attract, Baby-Doll Eyes, Captivate, Charm, and Tail Whip, along with not having fur to hide nipples, so it’d be incredibly easy for one to get you in the mood. With their abilities Water Absorb and Hydration, they can easily recover from fatigue with enough water. No other Pokémon comes close to this level of compatibility. Also, fun fact, if you pull out enough, you can make your Vaporeon turn white. Vaporeon is literally built for human dick. Ungodly defense stat+high HP pool+Acid Armor means it can take cock all day, all shapes and sizes and still come for more")
        }
    if (message.content === "!leave") {
        // Check if the member is in a voice channel
        if (message.member.voice.channelId) {
            try {
                // Disconnect the user from the voice channel
                await message.member.voice.disconnect();
                message.reply("You've been disconnected from the voice channel.");
            } catch (error) {
                console.error("Error disconnecting user from voice channel:", error);
                message.reply("An error occurred while disconnecting you from the voice channel. Please try again later.");
            }
        } else {
            message.reply("You aren't in a voice channel!");
        }
    }
    if (message.content.toLowerCase() === "hello yui" || message.content.toLowerCase() === "hey yui" || message.content.toLowerCase() === "hi yui")
        {
            message.reply("Hello!");
        }

    // if nathan says anything
    if (message.author.id === NspecificUserId) {
        if (message.content.includes('do it fart')) {
            message.reply("no, kill yourself");
        }
        if (message.content.startsWith('!')) {
            
            if (message.content.includes('!leave'))
                {
                    return;
                }
            if (message.content.includes('!clear')) {
                    // Extract the argument (number of messages to clear)
                    const args = message.content.split(' ');
                    const numMessages = parseInt(args[1]);
        
                    if (!numMessages || isNaN(numMessages)) {
                        message.reply("Please specify a valid number of messages to clear!");
                        return;
                    }
        
                    if (numMessages > 100) {
                        message.reply("You can't delete more than 100 messages!");
                        return;
                    }
        
                    if (numMessages < 1) {
                        message.reply("You can't delete less than 1 message!");
                        return;
                    }
        
                    // Fetch and delete messages
                    try {
                        const fetchedMessages = await message.channel.messages.fetch({ limit: numMessages });
                        await message.channel.bulkDelete(fetchedMessages);
                        message.channel.send(`Deleted ${numMessages} messages`).then((msg) => {
                            setTimeout(() => {
                                msg.delete().catch((error) => console.error(error));
                            }, 5000);
                        });
                    } catch (error) {
                        console.error("Error deleting messages:", error);
                        message.reply("An error occurred while deleting messages. Please try again later.");
                    }
                }
            message.reply("I don't have to listen to you");
        }
    }
    



    // if i say anything
    if (message.author.id === Father) {

        if (message.content.toLowerCase().includes("yui, power off")){
            message.reply("Give me a couple of seconds to put my system to sleep");
            setTimeout(() => {
                message.reply("Shutting down...");
            }, 4000);
            setTimeout(() => {
            client.destroy();
            process.exit();
            }, 5000);
        }
        if (message.content.toLowerCase().includes("goodnight yui"))
            {
                message.reply("Goodnight Daddy!");
            }


            // voice chat kick
            if (message.content.startsWith('!bye')) {
                // Get the first mentioned user
                const user = message.mentions.users.first();
                
                // Check if a user is mentioned
                if (user) {
                    const member = message.guild.members.resolve(user);
                    
                    // Check if the member is in a voice channel
                    if (member.voice.channelId) {
                        try {
                            // Disconnect the user from the voice channel
                            await member.voice.disconnect();
                            message.reply(`I have disconnected ${user.tag} from the voice channel.`);
                        } catch (error) {
                            console.error("Error disconnecting user from voice channel:", error);
                            message.reply("An error occurred while disconnecting the user from the voice channel. Please try again later.");
                        }
                    } else {
                        message.reply("They aren't in a voice channel!");
                    }
                } else {
                    message.reply("You need to mention someone!");
                }
            }
            
            

        if (message.content.toLowerCase().includes('system check')) {
            message.reply({
                content: "I'm fully operational!",
                message_reference: {
                    message_id: message.id, // Set the message ID of the original message
                },
            });
        }

        if (message.content.toLowerCase().includes("yui, introduce yourself")){
            message.reply("Hello! I'm Yui. I was created to serve as basic moderation because Kaito can't be bothered- because it sounded fun. It's nice to meet you!");
        }
        


        // undeafens user
        if (message.content.startsWith('!unshush')) {
            // Get the first mentioned user
            const user = message.mentions.users.first();
            
            // Check if a user is mentioned
            if (user) {
                const member = message.guild.members.resolve(user);
                
                // Check if the member is in a voice channel
                if (member.voice.channel) {
                    try {
                        // Server undeafen the member
                        await member.voice.setDeaf(false);
                        message.reply(`${user.tag} has been server undeafened.`);
                    } catch (error) {
                        console.error("Error server undeafening the member:", error);
                        message.reply("An error occurred while trying to server undeafen the member. Please try again later.");
                    }
                } else {
                    message.reply("The member is not in a voice channel!");
                }
            } else {
                message.reply("You need to mention a user!");
            }
        }



        // deafens user
        if (message.content.startsWith('!shh')) {
            // Get the first mentioned user
            const user = message.mentions.users.first();
            
            // Check if a user is mentioned
            if (user) {
                const member = message.guild.members.resolve(user);
                
                // Check if the member is in a voice channel
                if (member.voice.channel) {
                    try {
                        // Server deafen the member
                        await member.voice.setDeaf(true);
                        message.reply(`${user.tag} has been server deafened.`);
                    } catch (error) {
                        console.error("Error server deafening the member:", error);
                        message.reply("An error occurred while trying to server deafen the member. Please try again later.");
                    }
                } else {
                    message.reply("The member is not in a voice channel!");
                }
            } else {
                message.reply("You need to mention a user!");
            }
        }
        
        // clears chat
        if (message.content.startsWith('!clear')) {
            // Extract the argument (number of messages to clear)
            const args = message.content.split(' ');
            const numMessages = parseInt(args[1]);

            if (!numMessages || isNaN(numMessages)) {
                message.reply("Please specify a valid number of messages to clear!");
                return;
            }

            if (numMessages > 100) {
                message.reply("You can't delete more than 100 messages!");
                return;
            }

            if (numMessages < 1) {
                message.reply("You can't delete less than 1 message!");
                return;
            }

            // Fetch and delete messages
            try {
                const fetchedMessages = await message.channel.messages.fetch({ limit: numMessages });
                await message.channel.bulkDelete(fetchedMessages);
                message.channel.send(`Deleted ${numMessages} messages`).then((msg) => {
                    setTimeout(() => {
                        msg.delete().catch((error) => console.error(error));
                    }, 5000);
                });
            } catch (error) {
                console.error("Error deleting messages:", error);
                message.reply("An error occurred while deleting messages. Please try again later.");
            }  
        }

        // the mute function
        if (message.content.startsWith('!silence')) 
         {
                    // Get the first mentioned user
                    const user = message.mentions.users.first();
    
                 // Check if a user is mentioned
                if (user) {
                    const member = message.guild.members.resolve(user);
        
        // Check if the member is in a voice channel
        if (member.voice.channel) {
            try {
                // Server mute the member
                await member.voice.setMute(true);
                message.reply(`${user.tag} has been server muted.`);
            } catch (error) {
                console.error("Error server muting the member:", error);
                message.reply("An error occurred while trying to server mute the member. Please try again later.");
            }
        } else {
            message.reply("The member is not in a voice channel!");
        }
    }
    else {
        message.reply("You need to mention a user!");
    }
}
    // unmute function
    if (message.content.startsWith('!speak')) {
        // Get the first mentioned user
        const user = message.mentions.users.first();
        
        // Check if a user is mentioned
        if (user) {
            const member = message.guild.members.resolve(user);
            
            // Check if the member is in a voice channel
            if (member.voice.channelId) {
                try {
                    // Server unmute the member
                    await member.voice.setMute(false);
                    message.reply(`${user.tag} has been server unmuted.`);
                } catch (error) {
                    console.error("Error server unmuting the member:", error);
                    message.reply("I'm currently unable to unmute this person. I'm sorry.");
                }
            } else {
                message.reply("The user is not in a voice channel!");
            }
        } else {
            message.reply("You need to mention someone!");
        }
    }
           
        // if gavin says anything
        if (message.author.id === coFather)
            {
                if (message.content.toLowerCase().includes("hello"))
                    {
                        message.reply("Hi daddy!");
                    }
            }
    }
});

client.login(process.env.BOT_TOKEN);
