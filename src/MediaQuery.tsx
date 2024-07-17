import React from "react";
import { TOrientationValue, TResolutionValue, TDimensionValue } from "./types";
import useMediaQuery from "./useMediaQuery";

interface MediaQueryProps {
  orientation?: TOrientationValue;
  minResolution?: TResolutionValue | number;
  maxResolution?: TResolutionValue | number;
  minWidth?: TDimensionValue | number;
  maxWidth?: TDimensionValue | number;
  minHeight?: TDimensionValue | number;
  maxHeight?: TDimensionValue | number;
  children: React.ReactNode | ((matches: boolean) => React.ReactNode);
}



export function MediaQuery(props: MediaQueryProps) {
  const { orientation, minResolution, maxResolution, minWidth, maxWidth, minHeight, maxHeight } = props;
    const query = React.useMemo(()=>{
    return Object.entries(props).map(([key]) =>{
        let res
        switch(key){
            case 'orientation': res=`(orientation: ${orientation})`;
                break;
            case 'min-width':{
                const queryValue: TDimensionValue | undefined = typeof minWidth === "number" ? `${minWidth}px` : minWidth
                res=`(min-width: ${queryValue})`;
                } 
                break;
            case 'maxWidth':{
                const queryValue: TDimensionValue | undefined = typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth
                res=`(max-width: ${queryValue})`;
                } 
                break;

            case 'minHeight':{
                const queryValue: TDimensionValue|undefined = typeof minHeight === "number" ? `${minHeight}px` : minHeight
                res=`(min-height: ${queryValue})`;
                } 
                break;

            case 'maxHeight':{
                const queryValue: TDimensionValue|undefined = typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight
                res=`(max-height: ${queryValue})`;
                } 
                break;

            case 'minResolution': {
                const queryValue: TResolutionValue|undefined = typeof minResolution === "number" ? `${minResolution}dppx` : minResolution;
                res=`(min-resolution: ${queryValue})`;
                break;
            }
            case 'maxResolution': {
                const queryValue: TResolutionValue|undefined = typeof maxResolution === "number" ? `${maxResolution}dppx` : maxResolution;
                res=`(max-resolution: ${queryValue})`;
                break;
            }
        }
        return res;
    })
    },[]
);
  const matches = useMediaQuery({ query: query });
  return matches ? <> {props.children} </> : null;
}
