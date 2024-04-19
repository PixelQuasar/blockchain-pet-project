import React, { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { Web3, Contract } from "web3";
import abi from "../static-data/abi.json";
import errors from "../static-data/errors.ts";

export interface IContactsContextData {
    contract: Contract<any> | null;
    userAddress: string;
    networkAddresses: Array<string>;
    userBalance: string;
}

export const ContractsContext = createContext<IContactsContextData>({
    contract: null,
    userAddress: "",
    networkAddresses: [],
    userBalance: "",
});

export const ContactsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [contract, setContract] = useState<Contract<any> | null>(null);
    const [userAddress, setUserAddress] = useState("");
    const [networkAddresses, setNetworkAddresses] = useState([]);
    const [userBalance, setUserBalance] = useState("");

    useEffect(() => {
        const initContract = async () => {
            const web3 = new Web3(Web3.givenProvider || import.meta.env.VITE_LOCAL_NETWORK_URL); // @ts-ignore
            const eth = window.ethereum;
            if (eth) {
                try {
                    const accounts = await eth.request({ method: "eth_requestAccounts" });
                    if (accounts && accounts.length > 0) {
                        setNetworkAddresses(accounts);
                        setUserAddress(accounts[0]);

                        const weiBalance = await web3.eth.getBalance(accounts[0]);
                        const etherBalance = web3.utils.fromWei(weiBalance, "ether");
                        setUserBalance(String(etherBalance).slice(0, 8));

                        const contractInstance = new web3.eth.Contract(abi, import.meta.env.VITE_CONTRACT_ADRESS);
                        setContract(contractInstance);
                    } else {
                        console.error(errors.NO_ACCOUNTS);
                    }
                } catch (error) {
                    console.error(new Error(errors.ACCOUNT_BALANCE_FETCHING + " " + error));
                }
            } else {
                console.error(errors.METAMASK_EXTENSION_REQUIRED);
            }
        };

        initContract();
    }, []);

    return (
        <ContractsContext.Provider value={{ contract, userAddress, networkAddresses, userBalance }}>
            {children}
        </ContractsContext.Provider>
    );
};

export const useContractContext = () => {
    const context = useContext(ContractsContext);
    if (!context) {
        throw new Error(errors.CONTRACT_CONTEXT_PROVIDER);
    }
    return context;
};
