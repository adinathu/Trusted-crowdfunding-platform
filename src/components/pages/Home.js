import { useEffect, useState } from "react";
// import "./App.css";
import ProjectOngoing from "../ProjectOngoing";
import DisconnectButton from "../Wallet/DisconnectButton";
import ConnectButton from "../Wallet/ConnectButton";
import config from "../../config/config";
import About from "../About";
import AddProject from "../AddProject";
import CausesCard from "../CausesCard";
import Quote from "../Quote";
import Footer from "../Footer";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import axios from "axios";
import { Switch, FormControlLabel } from "@mui/material";
import causes from "../../assets/causes.png";
import hero from "../../assets/hero.jpg";
import { TezosToolkit } from "@taquito/taquito";

import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";


function Home() {
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
    getProjects();
  };

  const getProjects = () => {
    axios.get(`${config.API_URL}/storage`).then((res) => {
      setProjects(
        Object.keys(res.data).map((key) => {
          return {
            address: key,
            data: res.data[key],
          };
        })
      );

      setLoading(false);
    });
  };

  useEffect(() => {
    getProjects();
  }, []);

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="App">
     <LoginButton />
      <LogoutButton />

    
      <div className="hero-container">
        <div className="hero-item">
          <p className="hero-title">
            Charity brings to life again those who are spiritually dead
          </p>
          <div className="hero-quote">hELP PEOPLE WITH LOVE</div>
          <div className="contribute-btn primary-btn">
            <button>Contribute Now ♥</button>
          </div>
        </div>
      </div>

      <div className="causes-container">
        <div className="title-container">
          <div className="main-title">RECENT CAUSES</div>
          <div className="title-des">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
        <div className="causes  card-container">
          <CausesCard
            src={causes}
            name={"POOR CHILDREN DONATION"}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliar sit amet consectetur adipisicing elit. Alias, error."
            }
          />
          <CausesCard
            src={causes}
            name={"POOR CHILDREN DONATION"}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliar sit amet consectetur adipisicing elit. Alias, error."
            }
          />
          <CausesCard
            src={causes}
            name={"POOR CHILDREN DONATION"}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliar sit amet consectetur adipisicing elit. Alias, error."
            }
          />
        </div>
      </div>

      <Quote />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={handleClickOpen}
          style={{
            // margin: "20px 10px 10px 10px",
            backgroundColor: "var(--primary-color)",
            margin: "0 10px 0 0",

            border: "none",
            cursor: "pointer",
            padding: "10px 35px",
            borderRadius: "10px",
            fontSize: "16px",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          <div style={{ margin: "4px" }}>
            <b>Enlist Project</b>
          </div>
        </button>
        {userAddress === "" && !beaconConnection ? (
          <div style={{}}>
            <ConnectButton
              Tezos={Tezos}
              setWallet={setWallet}
              setUserAddress={setUserAddress}
              setUserBalance={setUserBalance}
              setBeaconConnection={setBeaconConnection}
              wallet={wallet}
            />
          </div>
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
        )}
      </div>
      <h1
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          fontSize: "28px",
          fontWeight: "600",
          textAlign: "center",
          textTransform: "capitalize",
          color: "#000000",
          margin: "8px 0",
        }}
      >
        Projects{" "}
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChecked} />}
          label="Show My Projects"
        />
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          padding: " 0 80px",
          margin: "0 auto",
          // placeItems: "center",
          justifyContent: "start",
        }}
      >
        {!checked
          ? projects.map((project) => (
              <ProjectOngoing
                projectDetails={project}
                key={project.address}
                Tezos={Tezos}
                userAddress={userAddress}
              />
            ))
          : projects.map(
              (project) =>
                project.data.owner === userAddress && (
                  <ProjectOngoing
                    projectDetails={project}
                    key={project.address}
                    Tezos={Tezos}
                    userAddress={userAddress}
                  />
                )
            )}
        ,
        <AddProject Tezos={Tezos} open={open} handleClose={handleClose} />
      </div>
      <About />
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  
  );
}

export default Home;
