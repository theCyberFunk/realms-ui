import { useState } from "react";
import { Combobox } from "@headlessui/react";

const coins = ["SOL", "BTC", "USDC"];

export default function ProposalRules() {
  const [selectedCoin, setSelectedCoin] = useState(coins[0]);
  const [query, setQuery] = useState("");

  const filteredCoin =
    query === ""
      ? coins
      : coins.filter((coin) => {
          return coin.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="bg-gray3 flex flex-col h-30">
      <p className="col-gray0">Proposal Rules</p>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h4>Which wallet's rules should this proposal follow?</h4>
      <p>
        These rules determine voting dutartion, voting threshold and vote
        tipping.
      </p>
      <div>
        <Combobox value={selectedCoin} onChange={setSelectedCoin}>
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            className={"bg-gray1"}
          />
          <Combobox.Options>
            {filteredCoin.map((coin) => (
              <Combobox.Option key={coin} value={coin}>
                {coin}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
      </div>
      <div className="flex-row-reverse">
        <span className="bg-gray1">Strict</span>
        <span className="bg-gray1">60%</span>
        <span className="bg-gray1">100,000</span>
        <span className="bg-gray1">3d</span>
      </div>
    </div>
  );
}
