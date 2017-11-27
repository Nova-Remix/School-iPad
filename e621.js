~nf commands/e621.js e621 request.post(`https://e621.net/post/index.json`)
    .query({ limit: '30', tags: args[0] })
    .set({'Accept': 'application/json', 'User-Agent': 'Superagent Node.js'})
    // Fetching 30 posts from E621 with the given tags
    .end(function (err, result) {
      if (!err && result.status === 200) {
        if (result.body.length < 1) {
          message.reply('Sorry, nothing found.') // Correct me if it's wrong.
        } else {
          var count = Math.floor((Math.random() * result.body.length))
          var FurryArray = []
          if (args[0] != null) {
            FurryArray.push(`<@${message.author.id}>, you've searched for \`${args[0]}\``);
          } else {
            FurryArray.push(`<@${message.author.id}>, you've searched for \`random\``);
          } // hehe no privacy if you do the nsfw commands now.
          FurryArray.push(result.body[count].file_url)
          message.channel.send(FurryArray.join('\n'));
        }
      } else {
        message.channel.send(`Got an error: ${err}`);
      }
    });
  });
