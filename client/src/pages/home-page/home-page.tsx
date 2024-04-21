import { HomePageWrapper } from "./styles.ts";
import { useContractContext } from "../../context/contracts-context.tsx";
import { Link } from "react-router-dom";

export const HomePage = () => {
    const contractsContext = useContractContext();
    return (
        <HomePageWrapper>
            home page!!
            <div>
                <Link to={`/profile/${contractsContext.userAddress}`}>My profile</Link>
            </div>
        </HomePageWrapper>
    );
};
