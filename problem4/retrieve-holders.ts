import { BigNumberish, Contract, ethers } from "ethers";
import { formatUnits } from "ethers/lib/utils.js";

const rpc: string = "https://bsc-dataseed.binance.org/";

const token_contract_address: string =
  "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";

const addresses: string[] = [
  "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392",
];

const abi: string[] = ["function balanceOf(address) view returns (uint)"];

const provider: ethers.providers.JsonRpcProvider =
  new ethers.providers.JsonRpcProvider(rpc);

const contract: Contract = new Contract(token_contract_address, abi, provider);

const runMain = async () => {
  try {
    for (const address of addresses) {
      const balance: BigNumberish = await contract.balanceOf(address);
      const formatted_balance: string = formatUnits(balance, 8);
      console.log(address, formatted_balance);
    }
  } catch (error) {
    console.error("Error encountered:", error);
  }
};

runMain();
