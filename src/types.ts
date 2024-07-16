export interface IMediaQuery{
query: string; 
} 

export type TDimension = "min-width" | "max-width" | "min-height" | "max-height";
export type TDimensionUnits = "px";
export type TDimensionValue = `${number}${TDimensionUnits}`;

export type TResolution = "min-resolution" | "max-resolution";
export type TResolutionUnits = "dppx";
export type TResolutionValue = `${number}${TResolutionUnits}`;

export type TOrientationValue = "portrait" | "landscape";

export type TQueryString =
  | `(${TDimension}: ${TDimensionValue})`
  | `(${TResolution}: ${TResolutionValue})`
  | `(orientation: ${TOrientationValue})`;