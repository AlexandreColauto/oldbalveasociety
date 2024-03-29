import { useModal } from "../../../../utils/ModalContext";
import { useEffect, useState } from "react";
import { FaDiscord, FaWallet } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import Button from "../../../../common/button";
import NavWrapper from "./Header.style";
import MobileMenu from "../mobileMenu/MobileMenu";
import logo from "../../../../assets/images/Logo.png";
import { useMoralis } from "react-moralis";

const Header = () => {
  const { walletModalHandle } = useModal();
  const { isAuthenticated, user, logout } = useMoralis();
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };
  useEffect(() => {
    const header = document.getElementById("navbar");
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });

    return () => {
      window.removeEventListener("sticky", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isAuthenticated) walletModalHandle(isAuthenticated);
  }, [isAuthenticated]);
  useEffect(() => {
    if (isAuthenticated && user.attributes)
      setUserAddress(user.attributes.ethAddress);
  }, [isAuthenticated]);
  return (
    <NavWrapper className="bithu_header" id="navbar">
      <div className="container">
        {/* Main Menu Start */}
        <div className="bithu_menu_sect">
          <div className="bithu_menu_left_sect">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="bithu nft logo" height={75} width={75} />
              </a>
            </div>
          </div>
          <div className="bithu_menu_right_sect bithu_v1_menu_right_sect">
            <div className="bithu_menu_list">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#roadmap">Roadmap</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                {/* <li className="submenu">
                  <a href="# ">Pages +</a>
                  <div className="sub_menu_sect">
                    <ul className="sub_menu_list">
                      <li>
                        <a href="/">Home One</a>
                      </li>
                      <li>
                        <a href="/home-two">Home Two</a>
                      </li>
                      <li>
                        <a href="/home-three">Home Three</a>
                      </li>
                      <li>
                        <a href="/blogs">Latest Blog</a>
                      </li>
                      <li>
                        <a href="/post">Blog Details</a>
                      </li>
                    </ul>
                  </div>
                </li> */}
              </ul>
            </div>
            <div className="bithu_menu_btns">
              <button className="menu_btn" onClick={() => handleMobileMenu()}>
                <MdNotes />
              </button>
              <a
                href="https://discord.gg/pcJrmD5Qx4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button sm variant="outline" className="join_btn">
                  <FaDiscord /> Join
                </Button>
              </a>
              {!isAuthenticated ? (
                <Button
                  sm
                  variant="hovered"
                  className="connect_btn"
                  onClick={() => walletModalHandle(isAuthenticated)}
                >
                  <FaWallet /> Connect
                </Button>
              ) : (
                <span
                  onClick={() => logout()}
                  style={{
                    textOverflow: "ellipsis",
                    width: "100px",
                    overflow: "hidden",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  {userAddress}
                </span>
              )}
            </div>
          </div>
        </div>
        {/* <!-- Main Menu END --> */}
        {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
      </div>
    </NavWrapper>
  );
};

export default Header;
