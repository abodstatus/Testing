const { Client, Intents } = require('discord.js');
const client1 = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES] });

const voiceChannelId = 'YOUR_VOICE_CHANNEL_ID'; // حط اي دي الروم الي تبي تدخلها بالحسابات

client1.once('ready', () => {
  console.log('READY TO JOIN VOICE CHANNELS');

  const voiceChannel = client1.channels.cache.get(voiceChannelId);
  if (!voiceChannel || voiceChannel.type !== 'GUILD_VOICE') {
    console.error('Invalid voice channel ID');
    return;
  }

  voiceChannel.join().then(connection => {
    console.log('token 1 has joined the voice channel');
  }).catch(error => {
    console.error('Error joining the voice channel:', error);
  });
});

client1.login(process.env.token1);

const client2 = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES] });

client2.once('ready', () => {
  console.log('READY TO JOIN VOICE CHANNELS');

  const voiceChannel = client2.channels.cache.get(voiceChannelId);
  if (!voiceChannel || voiceChannel.type !== 'GUILD_VOICE') {
    console.error('Invalid voice channel ID');
    return;
  }

  voiceChannel.join().then(connection => {
    console.log('token 2 has joined the voice channel');
  }).catch(error => {
    console.error('Error joining the voice channel:', error);
  });
});

client2.login(process.env.token2);


const client3 = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES] });

client3.once('ready', () => {
  console.log('READY TO JOIN VOICE CHANNELS');

  const voiceChannel = client3.channels.cache.get(voiceChannelId);
  if (!voiceChannel || voiceChannel.type !== 'GUILD_VOICE') {
    console.error('Invalid voice channel ID');
    return;
  }

  voiceChannel.join().then(connection => {
    console.log('token 3 has joined the voice channel');
  }).catch(error => {
    console.error('Error joining the voice channel:', error);
  });
});

client3.login(process.env.token3);

const client4 = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES] });

client4.once('ready', () => {
  console.log('READY TO JOIN VOICE CHANNELS');

  const voiceChannel = client4.channels.cache.get(voiceChannelId);
  if (!voiceChannel || voiceChannel.type !== 'GUILD_VOICE') {
    console.error('Invalid voice channel ID');
    return;
  }

  voiceChannel.join().then(connection => {
    console.log('token 4 has joined the voice channel');
  }).catch(error => {
    console.error('Error joining the voice channel:', error);
  });
});

client4.login(process.env.token4);

const client5 = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES] });

client5.once('ready', () => {
  console.log('READY TO JOIN VOICE CHANNELS');

  const voiceChannel = client5.channels.cache.get(voiceChannelId);
  if (!voiceChannel || voiceChannel.type !== 'GUILD_VOICE') {
    console.error('Invalid voice channel ID');
    return;
  }

  voiceChannel.join().then(connection => {
    console.log('token 5 has joined the voice channel');
  }).catch(error => {
    console.error('Error joining the voice channel:', error);
  });
});

client5.login(process.env.token5);

const client6 = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES] });

client6.once('ready', () => {
  console.log('READY TO JOIN VOICE CHANNELS');

  const voiceChannel = client6.channels.cache.get(voiceChannelId);
  if (!voiceChannel || voiceChannel.type !== 'GUILD_VOICE') {
    console.error('Invalid voice channel ID');
    return;
  }

  voiceChannel.join().then(connection => {
    console.log('token 6 has joined the voice channel');
  }).catch(error => {
    console.error('Error joining the voice channel:', error);
  });
});

client6.login(process.env.token6);

const client7 = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES] });

client7.once('ready', () => {
  console.log('READY TO JOIN VOICE CHANNELS');

  const voiceChannel = client7.channels.cache.get(voiceChannelId);
  if (!voiceChannel || voiceChannel.type !== 'GUILD_VOICE') {
    console.error('Invalid voice channel ID');
    return;
  }

  voiceChannel.join().then(connection => {
    console.log('token 7 has joined the voice channel');
  }).catch(error => {
    console.error('Error joining the voice channel:', error);
  });
});

client7.login(process.env.token7);

const client8 = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES] });

client8.once('ready', () => {
  console.log('READY TO JOIN VOICE CHANNELS');

  const voiceChannel = client8.channels.cache.get(voiceChannelId);
  if (!voiceChannel || voiceChannel.type !== 'GUILD_VOICE') {
    console.error('Invalid voice channel ID');
    return;
  }

  voiceChannel.join().then(connection => {
    console.log('token 8 has joined the voice channel');
  }).catch(error => {
    console.error('Error joining the voice channel:', error);
  });
});

client8.login(process.env.token8);

const client9 = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES] });

client9.once('ready', () => {
  console.log('READY TO JOIN VOICE CHANNELS');

  const voiceChannel = client9.channels.cache.get(voiceChannelId);
  if (!voiceChannel || voiceChannel.type !== 'GUILD_VOICE') {
    console.error('Invalid voice channel ID');
    return;
  }

  voiceChannel.join().then(connection => {
    console.log('token 9 has joined the voice channel');
  }).catch(error => {
    console.error('Error joining the voice channel:', error);
  });
});

client9.login(process.env.token9);

const client10 = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES] });

client10.once('ready', () => {
  console.log('READY TO JOIN VOICE CHANNELS');

  const voiceChannel = client10.channels.cache.get(voiceChannelId);
  if (!voiceChannel || voiceChannel.type !== 'GUILD_VOICE') {
    console.error('Invalid voice channel ID');
    return;
  }

  voiceChannel.join().then(connection => {
    console.log('token 10 has joined the voice channel');
  }).catch(error => {
    console.error('Error joining the voice channel:', error);
  });
});

client10.login(process.env.token10);