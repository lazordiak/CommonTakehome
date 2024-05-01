This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run the Hardhat test network (necessary to run the smart contract):
Open a new command window
cd hardhat 
npx hardhat compile
npx hardhat node

In a third window
cd hardhat 
npx hardhat ignition deploy ./ignition/modules/UserInfo.ts --network localhost

This should start a node on the hardhat test network and launch the smart contract.

## Inspiration and First Steps

Before coding, I had to figure out what the app was going to look like and how the key features were going to be presented.
Seeing that there was to be a forum option, a gallery option, and options for meetups and events, I went looking for current sites based around NFTs and community to draw inspiration.
I found two at the top of Google -- 
NFTCommunity (https://nftcommunity.gg/) is just a link to a discord integration, so I ignored it.
NFTPort (https://www.nftport.xyz/community) also has discord integration, but looked more like what the takehome described, with different projects one could browse through. 
I noted the prominance of clean, bright colors and decided to make a simple color scheme of royal blue, white, slate and charcoal. I thought the clean white and gray aspects would contrast nicely with the pop of the blue on links and buttons.

For styling, I used Tailwind, partially because I'm familiar with it and partially because I like how the system encourages a standard approach to design. With TypeScript, you have strict typing so you always know where your data is going and what format it's going to be in. Tailwind I think is similar -- because it's based on predetermined design blocks, it makes sure everything adheres to a system and there aren't random padding values flying around.
I also used TypeScript, for the reasons I've just stated.

Bootstrapping the app, I used NextJs's create-next-app. I know create-react-app is deprecated, and React itself in the documents recommends using Next. Though I haven't used it professionally, I've used it for personal projects (my website is in Next) and have always been interested in exploring it more.

For the backend, I decided to use NextJs's built-in API routing feature that lets you direct routes without needing a separate backend. I made this decision for a few reasons:
- I didn't have a lot of experience with it and wanted to try it
- It seemed quicker and easier potentially than setting up, say, an express backend

I also used Firestore for a database, purely because I'm a bit more familiar with it than I am with, say, SQL.

Though the API routes are public and thus some security would need to be implemented for a production app, I decided against doing it first thing for a demo app, which I don't regret because I didn't have time for everything!

For the smart contract, I decided to use Hardhat. I don't know much about implementing smart contracts, but I'd seen a NextJs/hardhat stack while doing some Googling, so I thought I would try it out.

I also used framer-motion, react-spinners, and hamburger-react for various UI elements.

## Features and what's finished

There is a gallery, and it does display a collection of NFTs that can be sorted by rarity, category and ownership status. One can click into the NFT to open a modal with more details.
There is a small forum where one can post and view other topics of discussion.
There is a page where one can view meetups and projects based around NFTs, and one can click into the projects to see details. Clicking the 'attend event' button will open an email prompt to the email of whoever is organizing the event.
There is a profile page where one can edit one's bio and user details.
# Update: The profile page user details edit feature now uses a smart contract
The smart contract:
- Fetches data from the chain on load
- Updates the data with edited user details (but not bio, currently)

## Challenges and what's not finished

Most obviously, the smart contract that I bootrstrapped with HardHat is still quite rudimentary.

Aside from that, not everything is in Firebase -- there is still dummy data in the gallery section and the forum section. In addition, the user profile page only fetches data from the database -- changes you make to your user profile are not persisted through a refresh.

Besides that, I would have really loved to do more with framer-motion and give the UI elements a bit more pop. I've used framer-motion before and I'm familiar with it, but it just took backseat to functionality and data consistency.

## Considerations for next steps, things I could have done differently 

The smart contract would be the next big thing I'd want and need to work on. 
Additionally, if this were going to be a production level app, I'd need a user authentication system. I'd meant to put this in through Firebase, 
For data storage, I considered just using local storage rather than using a database at all. It would have been a smidge quicker, and since this isn't a secure app anyway the downsides wouldn't have been large.

In summary, going forward there are three areas for me to tackle:
- security and authenthication, probably through Firebase, since I already have Firestore integrated.
- UI improvement (framer motion and better standardizing UI components)
- Expand on the smart contract

## Video Demo

Here are video demos for mobile and dekstop.

[![Video Thumbnail](https://img.youtube.com/vi/ZrTNJwWfyEw/0.jpg)](https://www.youtube.com/watch?v=ZrTNJwWfyEw)

[![Video Thumbnail](https://img.youtube.com/vi/TOYjiiQLE5g/0.jpg)](https://www.youtube.com/watch?v=TOYjiiQLE5g)

## Deploy on Vercel

^ This is also boilerplate. This is not deployed on Vercel, though I could deploy it! My personal site is deployed on Vercel, they're not bad!
