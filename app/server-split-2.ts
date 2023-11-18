import { codeSplitShared } from "./server-split-shared";

export function hello() {
  return "2: " + codeSplitShared();
}
