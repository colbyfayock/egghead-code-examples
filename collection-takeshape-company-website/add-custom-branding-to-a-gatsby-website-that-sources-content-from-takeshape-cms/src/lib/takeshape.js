import { getImageUrl } from "takeshape-routing";

export function tsImageUrl({ path } = {}) {
  return getImageUrl(path);
}