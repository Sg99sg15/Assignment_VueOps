import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const S = (size: number) => scale(size);
export const VS = (size: number) => verticalScale(size);
export const MS = (size: number, factor?: number) => moderateScale(size, factor);
