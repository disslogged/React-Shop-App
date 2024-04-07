import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useSelector } from "react-redux";

type DispatchFunction = () => AppDispatch;
export const useCheckoutDispatch: DispatchFunction = useDispatch;
export const useCheckoutSelector: TypedUseSelectorHook<RootState> = useSelector;
