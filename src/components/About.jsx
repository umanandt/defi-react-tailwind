import React from "react";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="w-full bg-black text-white text-center">
      <div className="max-w-[1240px] mx-auto px-4 py-16">
        <div>
          <h1 className="py-4">A Growing Ecosystems</h1>
          <p className="py-4 text-xl">
            {" "}
            The Defi protocol system empowers developers, liquidity providers,
            and trafers to participate in a financial marketplace that is open
            and accessible to all
          </p>

          <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AboutCard
              icon={<SiHiveBlockchain size={40} />}
              heading="Reliable, tamper-proof network"
              text="Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract."
            />

            <AboutCard
              icon={<SiStrapi size={40} />}
              heading="Seamless connection to any API"
              text="Built on a flexible framework that can retieve data from any API, connect with existing systems , and integrate with any currect or future."
            />


<AboutCard
              icon={<SiFsecure size={40} />}
              heading="Reliable, tamper-proof network"
              text="Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract."
            />

            <AboutCard
              icon={<VscServerProcess size={40} />}
              heading="Seamless connection to any API"
              text="Built on a flexible framework that can retieve data from any API, connect with existing systems , and integrate with any currect or future."
            />

          </div>
          <button className="m-2">Use Defi</button>

        </div>
      </div>
    </div>
  );
};

export default About;
