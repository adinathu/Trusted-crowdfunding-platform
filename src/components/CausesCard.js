import React , { useState } from "react";
import '../App.css'
import ConnectButton from '../components/Wallet/ConnectButton'
import DisconnectButton from '../components/Wallet/ConnectButton'
import { TezosToolkit } from "@taquito/taquito";

const CausesCard = ({ src, name, description }) => {
  const [Tezos, setTezos] = useState(
    new TezosToolkit("https://jakartanet.smartpy.io/")
  );
  const [wallet, setWallet] = useState(null);
  const [userAddress, setUserAddress] = useState("");
  const [userBalance, setUserBalance] = useState(0);
  const [beaconConnection, setBeaconConnection] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    // getProjects();
  };




  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="recent-tag">Recent</div>
      <div className="card-info">
        <div className="card-title">{name}</div>
        <div className="card-des">{description}</div>
        <div className="casestudy-btn primary-btn">
        {/* {userAddress === "" && !beaconConnection ? (
          <ConnectButton
          Tezos={Tezos}
            setWallet={setWallet}
            setUserAddress={setUserAddress}
            setUserBalance={setUserBalance}
            setBeaconConnection={setBeaconConnection}
            wallet={wallet}
            />
            ) : (
          <DisconnectButton
          wallet={wallet}
          setUserAddress={setUserAddress}
          setUserBalance={setUserBalance}
          setWallet={setWallet}
          setTezos={setTezos}
          setBeaconConnection={setBeaconConnection}
          userBalance={userBalance}
          userAddress={userAddress}
          />
        )} */}
        <button>
          <a href="http://google.com/">

        know more
          </a>
        </button>
        </div>
      </div>
    </div>
  );
};

export default CausesCard;
