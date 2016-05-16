# SoundCloud Downloader

Take back what's yours by downloading all of your SoundCloud tracks.

## Disclaimer

This program is intended for SoundCloud users wishing to download their **OWN ORIGINAL** tracks to their hard drive.

Vitruvian Technology, Corp. does not assume any liability for how this code may be manipulated, used, or in voilation of SoundCloud's Terms and Conditions by the user.

## Installation

`npm install`

## Usage

`$ USER_ID=<UserId> OAUTH=<OAuthToken> CLIENT_ID=<ClientId> npm start`

Before downloading, please make sure that you do not have any hidden tracks from previously downgrading from a SoundCloud Pro or Unlimited Pro plan. This program can only download tracks that are bound by your current plan, so we suggest reinstating a Pro or Unlimited Pro plan to be able to download all of your tracks (this measure only pertains to those who have downgraded, and SoundCloud is hiding their tracks that go over the Free/Pro plans.)

For users who have downgraded from Pro or Unlimited Pro plans, you would have to spend $7/$15 (USD) to retrieve your hidden tracks, but the one-time price to reinstate the plan is worth it to retain your original material. You may then cancel renewal of the upgraded plan via SoundCloud as you normally would after running this program.

Tracks will be downloaded to a `tracks/` directory inside the root directory of where this program was ran (the current working directory.)

To obtain the `UserId`, `OAuthToken`, and `ClientId`:
* Login to SoundCloud normally via any Web browser.
* Open browser developer tools (`CMD/CTRL+SHIFT+J` if using Google Chrome, for example.)
* Switch to Network monitoring panel.
* Browse only XHR requests (reload the page if necessary.)
* `UserId` and `ClientId` can be found from any XHR API request pathname and querystring.
  * Example: `https://api-v2.soundcloud.com/users/<UserId>/conversations/unread?force=1&limit=20&offset=0&linked_partitioning=1&client_id=<ClientId>&app_version=1502971101`
* `OAuthToekn` can be found from any XHR API request `Authorization` header (do not copy the `'Oauth '` prefix; just the token is required.)
  * Example: `Authorization:OAuth <OAuthToken>`

Detailed screenshots showcasing this flow will be forthcoming.

---
Copyright 2017 Vitruvian Technology, Corp.
