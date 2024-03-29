import React from 'react';
import { Col, Layout } from 'antd';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import { ArtistCard } from '../../components/ArtistCard';
import { useMeta } from '../../contexts';

export const AboutUsView = () => (
    <>
    <div className="mission">
        <br></br> 
        <h3>Founded in late 2021, InvestConservation provides tokenized investments representing the world’s most threatened ecosystems, partnering with proven conservation partners and motivated landowners. </h3>
        <br></br>
        <br></br>
        <h1>InvestConservation tokens are:</h1>
        <ul>
          <h3>• Unique – each token directly represents one mapped hectare of protected high conservation value forest.</h3>
          <h3>• Non-replicable – each token is created on the low carbon Solana blockchain.</h3>
          <h3>•	Tradeable – issued tokens are freely tradeable and represent an investment in Conservation Carbon to address climate change and biodiversity loss.</h3>
          </ul>
          <br></br>

          <h1>InvestConservation tokens represent sequestered carbon:</h1>
        <ul>
          <h3> •Each token details the sequestered carbon in the mapped hectare.</h3>
          <h3> •Token issuance is restricted - each ton of sequestered carbon represents a ton of avoided deforestation under the Conservation Carbon standard .</h3>
          <h3> •The Conservation Carbon standard ensures:</h3>
          <ul>
            <h3>o	Strict Eligibility – land must be reserved for conservation </h3>
            <h3>o	Positive Additionality – token issuance actively encourages further conservation </h3>
            <h3>o	Permanence – 90-year preservation commitments. </h3>
            <h3>o	Zero leakage – all tokens represent a) privately held land in b) high biodiversity areas that are c) in the zone of deforestation.</h3>
          </ul>
          </ul>
          <br></br>
          <br></br>
          <h3>
          InvestConservation tokens cover only the most diverse regions on earth.  Most terrestrial biodiversity is concentrated on less than 2% of the land, and we are focused on conserving the most valuable and most threatened of that land. 
          </h3>


    </div>
    
    <div className="rules">
        
    </div>

    <div className="FAQ">
        
    </div>

    </>
)


;



const { Content } = Layout;


/*
import { Col, Layout } from 'antd';
import React from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import { ArtistCard } from '../../components/ArtistCard';
import { useMeta } from '../../contexts';

const { Content } = Layout;

export const AboutUsView = () => {
  <>
  <div className="mission">
  <h2>Trying to get a better idea of what you’ve stumbled upon, you work up the courage to say in hushed tones to a merchant, <span className='purple'>“Why does this Magic Items Marketplace exist?”</span></h2>
  <h3>"Because digital artists should be compensated for making digital art," barks the merchant with a scowl.</h3>
  <h3>A bearded fellow with deep, ancient creases in his skin looks up from his browsing with a far-off gaze. He pontificates softly, "Because D&D is built to collectively imagine new worlds, making it an excellent space to explore what it means to 'own' imaginary objects."</h3>
  <h3>A tiny goblin hops onto a counter and hisses in your general direction, shrieking, "Because there are so many cash-grab NFT projects out there! We need more projects that put this technology in the hands of creative creatures..."</h3>
  <br></br>
  <hr></hr>
  <br></br>
</div>

<div className="rules">
  <h2>R</h2>
  <br></br>
  <br></br>
  <h2>ules by which the Magic Items Marketplace is run:</h2>
  <h3>Rule 1: All artwork must be original, created by the named artist.</h3>
  <h3>Rule 2: Each individual artwork must only be minted and published once. While multiple copies of the item may be printed, each artwork must only have one "master edition."</h3>
  <h3>Rule 3: The DM always decides what items are playable in a specific game or campaign... Owning a digital Magic Item doesn't flat out entitle you to use it in a game, so tread lightly, be nice, and most importantly have fun.</h3>
  <br></br>
  <hr></hr>
  <br></br>
</div>

<div className="FAQ">
  <h4>FAQ:</h4>
  <h3>What is a Magic Item NFT, and what does it do?</h3>
  <h2>Think of these Magical Items like digital trading cards signed by the artist - limited edition copies of a 2D or 3D rendition of an object in an rpg universe.</h2>
  <h2>Truth is, we are at the frontier of integrating digital objects into our games and into our lives, so we don't exactly know what makes certain digital objects special. You may want to simply collect and trade Magic Items because you think they're beautiful or interesting. You might want to gift a Magic Item to your DM as a token of your appreciation for their creative work. Down the road, you might find a way to integrate these 2D or 3D items into virtual gaming environments. How you think about these items is entirely up to you.</h2>
  <h2>One thing is certain - you don't need a special internet object to use a magic item in your tabletop rpg. It can be cool to own an artistic rendition of a thing, but you definitely don't need an NFT to play DnD! When in doubt, remember Rule 3 above.</h2>
  <br></br>
  <h3>Someone wants to give me a Magic Item - what should I do next?</h3>
  <h2>Step 1) Download the “Phantom Wallet” Chrome Extension</h2>
  <h2>Step 2) Create a new wallet. Write the Secret Recovery Phrase on paper and keep it secret, keep it safe. Choose a good password that’s hard to guess.</h2>
  <h2>Step 3) The default name of your wallet is your “Public Key” - your identity on the Solana blockchain - you can give it out safely, to use for transactions.</h2>
  <h2>If someone has offered to give you a Magic Item, give them your Public Key and they’ll send you the item. When you receive the item, it will show up in your Phantom Wallet.</h2>
  <br></br>
  <h3>How do I buy magic items? How do I sell items I have created myself?</h3>
  <h2>If you want to buy or sell a Magic Item, click “Connect” on the Magic Items page.</h2>
  <h2>To buy something, choose an auction or single sale. Make the purchase by using a credit card to buy SOL, or paying with SOL from your wallet directly.</h2>
  <h2>To sell something, you need to be whitelisted as an artist on the site. Contact u/ghostoutfits on Reddit by private message, and the site mods will give you further instructions.</h2>
  <br></br>
  <h3>Aren't NFTs just a scam? Aren't people paying millions of dollars for a single jpeg?</h3>
  <h2>Plenty of NFTs are scams or at least just kind of dumb, and we have no advice for you on whether NFTs are a wise investment.</h2>         
  <h2>NFTs are special because they've allowed digital objects to have real scarcity - that is, the NFT itself cannot be copied. Investment aside, our vision for this site is like "Magic Item Etsy" - a marketplace where digital artists engage with rpg enthusiasts to enhance each other’s activities.</h2>
  <br></br>
  <h3>No, but seriously - Why would I pay money for a digital imaginary thing? How is it any different from a copy or a screenshot?</h3>
  <h2>Umm... Yah it's hard to say. If it doesn't seem special to you to own a "signed" card, that's a-ok. It's early days for digital objects, but we think the best way to learn more about how digital scarcity operates in our weird "Ready Player One" future is to try this shit out and see how it works. </h2>
  <br></br>
</div>
  </>


  const { whitelistedCreatorsByCreator } = useMeta();

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  
  const items = Object.values(whitelistedCreatorsByCreator);
  const artistGrid = (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid artists-masonry"
      columnClassName="my-masonry-grid_column"
    >
      {items.map((m, idx) => {
        const id = m.info.address;
        return (
          <Link to={`/aboutus/${id}`} key={idx}>
            <ArtistCard
              key={id}
              artist={{
                address: m.info.address,
                name: m.info.name || '',
                image: m.info.image || '',
                link: m.info.twitter || '',
                background: m.info.background || '',
              }}
            />
          </Link>
        );
      })}
    </Masonry>
  );

  return (
    <Layout style={{ margin: 0, marginTop: 30 }}>
      <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Col style={{ width: '100%', marginTop: 10 }}>{artistGrid}</Col>
      </Content>
    </Layout>
  );
};
*/


