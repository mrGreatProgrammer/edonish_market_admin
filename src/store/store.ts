import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import appSlice from "./app";

const rootReducer = combineReducers({
  appSlice,
//   [selectorsConstDataApi.reducerPath]: selectorsConstDataApi.reducer,
});

// const store = {
//   key: "root",
// //   storage,
//   whitelist: [
//     "appSlice",
//   ],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
//   middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware
    // getDefaultMiddleware({
    // //   serializableCheck: {
    // //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    // //   },
    // }).concat(selectorsConstDataApi.middleware),
});

// export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const persistor = persistStore(store);
export default store;
