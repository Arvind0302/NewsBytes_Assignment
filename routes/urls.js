const express = require('express');
const router = express.Router();
const { shortenUrl, decodeUrl } = require('../controllers/url');

/**
 * @swagger
 * components:
 *   schemas:
 *     Url:
 *       type: object
 *       required:
 *         - originalUrl
 *         - hash
 *       properties:
 *         originalUrl:
 *           type: string
 *           description: The original URL to be shortened
 *         hash:
 *           type: string
 *           description: The unique hash for the shortened URL
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The creation date of the URL
 *         clickLimit:
 *           type: integer
 *           description: Optional click limit for the shortened URL
 *         clickCount:
 *           type: integer
 *           description: The number of times the shortened URL has been clicked
 *       example:
 *         originalUrl: "https://www.example.com/product?utm_source=newsletter&utm_medium=email&utm_campaign=spring_sale&utm_content=button1"
 *         hash: "abc123"
 *         createdAt: "2023-05-24T14:48:00.000Z"
 *         clickLimit: 5
 *         clickCount: 0
 */

/**
 * @swagger
 * /shorten:
 *   post:
 *     summary: Shorten a new URL
 *     tags: [Url]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - originalUrl
 *             properties:
 *               originalUrl:
 *                 type: string
 *                 description: The original URL to be shortened
 *                 example: "https://www.example.com/product?utm_source=newsletter&utm_medium=email&utm_campaign=spring_sale&utm_content=button1"
 *               clickLimit:
 *                 type: integer
 *                 description: Optional click limit for the shortened URL
 *                 example: 10
 *     responses:
 *       200:
 *         description: The shortened URL
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 shortUrl:
 *                   type: string
 *                   description: The shortened URL
 *                   example: "http://localhost:4000/abc123"
 *       500:
 *         description: Server error
 */
router.post('/shorten', shortenUrl);

/**
 * @swagger
 * /{hash}:
 *   get:
 *     summary: Redirect to the original URL
 *     tags: [Url]
 *     parameters:
 *       - in: path
 *         name: hash
 *         type: string
 *         required: true
 *         description: The hash of the shortened URL
 *     responses:
 *       302:
 *         description: Redirects to the original URL
 *       404:
 *         description: URL not found
 *       410:
 *         description: URL usage limit reached
 *       500:
 *         description: Server error
 */
router.get('/:hash', decodeUrl);

module.exports = router;
