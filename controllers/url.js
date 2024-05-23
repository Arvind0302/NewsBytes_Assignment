const Url = require('../models/url');
const generateHash = require('../utils/hash');
const crypto = require('crypto');

const createUniqueHash = async (originalUrl) => {
    let hash;
    let existingUrl;
    do {
      const salt = crypto.randomBytes(4).toString('hex').substring(0,5);
      hash = generateHash(originalUrl, salt);
      existingUrl = await Url.findOne({ hash });
    } while (existingUrl);
    return hash;
  };

const shortenUrl = async (req, res) => {
  const { originalUrl, clickLimit } = req.body;

  try {
    const already_present = await Url.findOne({ originalUrl });
    if(!already_present)
    {
    const hash = await createUniqueHash(originalUrl);
    // console.log("hash is", hash);
    const newUrl = new Url({
      originalUrl,
      hash,
      clickLimit
    });
    console.log(newUrl);
    await newUrl.save();

    res.json({ shortUrl: `${req.protocol}://${req.get('host')}/${hash}` });
}
else
{
    return res.status(404).json(`Url encode already exists ,shortUrl:${req.protocol}://${req.get('host')}/${already_present.hash}`);
}
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
}

const decodeUrl =  async (req, res) => {
    const { hash } = req.params;
  
    try {
      const url = await Url.findOne({ hash });
  
      if (url) {
        if (url.clickLimit === null || url.clickCount < url.clickLimit) {
          url.clickCount++;
          await url.save();
          return res.redirect(url.originalUrl);
        } else {
          return res.status(410).json('URL usage limit reached');
        }
      } else {
        return res.status(404).json('URL not found');
      }
    } catch (err) {
      console.error(err);
      res.status(500).json('Server error');
    }
  }

  module.exports = {shortenUrl, decodeUrl}