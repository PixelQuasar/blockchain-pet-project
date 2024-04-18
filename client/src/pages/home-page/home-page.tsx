import { HomePageWrapper } from "./styles.ts";
import { useContext } from "react";
import { ContractsContext } from "../../context/contracts-context.tsx";

export const HomePage = () => {
    const contractsContext = useContext(ContractsContext);
    return (
        <HomePageWrapper>
            home page!!
            <div>{JSON.stringify(contractsContext.networkAccounts)}</div>
        </HomePageWrapper>
    );
};
