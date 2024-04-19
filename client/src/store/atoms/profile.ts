import { atom } from "recoil";
import atomIds from "../atom-ids.ts";

export interface IProfileState {
    name: string;
}

const profileAtom = atom({
    key: atomIds.PROFILE,
    default: {
        name: "",
    },
});

export default profileAtom;
