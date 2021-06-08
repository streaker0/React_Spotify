const express = require('express')
const cors = require('cors')
const SpotifyWebApi = require('spotify-web-api-node')
const app = express();
app.use(express.json());
app.use(cors());

app.post('/login', (req, res) => {
	const code = req.body.code
	const spotifyApi = new SpotifyWebApi({
		redirectUri:"http://localhost:3000",
		clientId:'dfac52874b3949939116e62f9c97392e',
		clientSecret:'65e1d09a45034bfea99e8fda40e7bc3b'
	})
	spotifyApi.authorizationCodeGrant(code).then(data=>{
		res.json({
			accessToken:data.body.access_token,
			refreshToken:data.body.refresh_token,
			expiresIn:data.body.expires_in
		})
	}).catch(err=>{res.sendStatus(400)})
})

app.post('/refresh', (req, res) => {
	const refreshToken = req.body.refreshToken
	const spotifyApi = new SpotifyWebApi({
		redirectUri:"http://localhost:3000",
		clientId:'dfac52874b3949939116e62f9c97392e',
		clientSecret:'65e1d09a45034bfea99e8fda40e7bc3b',
		refreshToken
	})
	spotifyApi.refreshAccessToken()
	.then(data=>{
		res.json({
			accessToken:data.body.accessToken,
			expiresIn:data.body.expiresIn
		})
	})
	.catch(()=>{res.sendStatus(400)})
})
app.listen(5000)