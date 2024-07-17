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

  const camelTo = (key: string) => {
        return key.replace( /([A-Z])/g, "-$1").toLowerCase();
    }

  const getQuery=(key: string, props)=>{
        const queryValue = typeof props[key] === "number" ? `${props[key]}px` : props[key]
        return `(${camelTo(key)}:${queryValue})`
  }
  const query = React.useMemo(()=>{
    return Object.entries(props).map(([key]) =>{
        return getQuery(key, props)
    })
   },[]
  );
  const matches = useMediaQuery({ query: query });
  return matches ? <> {props.children} </> : null;
}
