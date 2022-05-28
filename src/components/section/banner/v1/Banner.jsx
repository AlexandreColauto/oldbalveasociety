import { useModal } from "../../../../utils/ModalContext";
import useWhishList from "../../../../utils/useWhishList";
import Counter from "../../../../common/counter";
import Button from "../../../../common/button";
import BannerV1Wrapper from "./Banner.style";
import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";

import characterThumb from "../../../../assets/images/nft/Character1.jpeg";
import mintLiveDownArrow from "../../../../assets/images/nft/mint_live_down_arrow.svg";
import mintLiveText from "../../../../assets/images/nft/mint_live_text.png";
import homeImageBG from "../../../../assets/images/nft/home_img_bg.png";
import sample from "../../../../assets/images/PROMO.mp4";

const Banner = () => {
  const { mintModalHandle } = useModal();
  const { isAuthenticated } = useMoralis();
  const [addToWishList, getWishList] = useWhishList();
  const [isWishList, setWishList] = useState(false);
  useEffect(() => {
    whishList();
  }, [isAuthenticated]);

  const whishList = async () => {
    const result = await getWishList();
    console.log(result);
    setWishList(result);
  };
  return (
    <BannerV1Wrapper id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="bithu_v1_baner_left">
              <h2>Your next big score in nfts</h2>

              <h3>
                <span className="count">
                  <Counter end={5555} duration={5555} />
                </span>{" "}
                / 5555 Minted
              </h3>
              <div className="banner_buttons">
                <Button lg variant="outline" onClick={() => mintModalHandle()}>
                  {" "}
                  Mint soon...
                </Button>
                {isWishList ? (
                  <Button lg variant="mint" onClick={() => addToWishList()}>
                    Wishlist now
                  </Button>
                ) : (
                  <Button lg disabled variant="outline">
                    ❤️
                  </Button>
                )}
              </div>
              <div className="coin-info">
                <span> Price 0.5 BNB + gas</span>
                <span>
                  {/* MINT IS LIVE{" "} */}
                  <span className="highlighted">MINT 25 JUN</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bithu_v1_baner_right">
              <div className="bithu_v1_baner_right_img_sect">
                {/* <div className="mint_live_circle_sect">
                  <div className="mint_live_circle">
                    <span>
                      <img src={mintLiveDownArrow} alt="" />
                    </span>
                    <span className="mint_live_text rotated-style">
                      <img src={mintLiveText} alt="" />
                    </span>
                  </div>
                </div> */}
                <div className="bithu_v1_baner_right_img_bg">
                  <img src={homeImageBG} alt="" />
                </div>
                <div className="bithu_v1_baner_right_img">
                  <video className="videoTag" autoPlay loop muted width={450}>
                    <source src={sample} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerV1Wrapper>
  );
};

export default Banner;
