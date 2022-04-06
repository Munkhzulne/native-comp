const spaceNames = [0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] as const;

type SpacingType = typeof spaceNames[number];

export const baseSpace = 4;

export const spacing = (spaceName: SpacingType): number => {
  return baseSpace * spaceName;
};
