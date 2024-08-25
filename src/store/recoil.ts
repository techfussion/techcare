import { atom } from "recoil";

// interface ApiData {
//   name: string;
// }

export const apiDataState = atom<{}>({
  key: "apiDataState",
  default: [],
});
