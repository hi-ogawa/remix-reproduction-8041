import { codeSplitShared } from "./server-split-shared";

export function hello() {
  return "1: " + codeSplitShared();
}
