import { PREVIEW_IMAGE, CHANGE_MOBILE_HEAD_COLOR } from "../actionTypes";

export const previewImage = () => ({ type: PREVIEW_IMAGE });
export const changeMobileHeadColor = (color, isWhiteTextHeader) => ({
  type: CHANGE_MOBILE_HEAD_COLOR,
  payload: { color, isWhiteTextHeader: !!isWhiteTextHeader },
});
