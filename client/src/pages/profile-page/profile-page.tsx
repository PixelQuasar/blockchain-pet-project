import { ProfilePageWrapper } from "./styles.ts";
import { useNavigate, useParams } from "react-router-dom";
import { useContractContext } from "../../context/contracts-context.tsx";
import { useEffect, useState } from "react";

export const ProfilePage = () => {
    const navigate = useNavigate();
    const addressContext = useContractContext();
    const params = useParams();
    const [userAddress, setUserAddress] = useState("");

    useEffect(() => {
        if (addressContext.networkAddresses.includes(params.address as string)) {
            setUserAddress(params.address as string);
        } else {
            navigate("/errors/notfound");
        }
    }, [addressContext.networkAddresses]);
    return <ProfilePageWrapper>hi {userAddress!}</ProfilePageWrapper>;
};
