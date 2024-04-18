import { createContext, useEffect, useState } from "react";
import { Web3 } from "web3";

export interface IContractContext {
    address: string;
    userAccount: string;
    networkAccounts: Array<string>;
    userBalance: number;
}

export const ContractsContext = createContext({
    address: null,
    userAccount: null,
    networkAccounts: [],
    userBalance: NaN,
});

export const ContactsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [address, setAddress] = useState(null);
    const [userAccount, setUserAccount] = useState(null);
    const [networkAccounts, setNetworkAccounts] = useState([]);
    const [userBalance, serUserBalance] = useState(NaN);

    useEffect(() => {
        const initContract = async () => {
            const web3 = new Web3(Web3.givenProvider || import.meta.env.VITE_LOCAL_NETWORK_URL);
            if (window?.ethereum) {
                try {
                    const accounts = await window?.ethereum.request({ method: "eth_requestAccounts" });
                    if (accounts && accounts.length > 0) {
                        setNetworkAccounts(accounts);
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        };

        initContract();
    }, []);

    return (
        <ContractsContext.Provider value={{ address, userAccount, networkAccounts, userBalance }}>
            {children}
        </ContractsContext.Provider>
    );
};
