import * as React from "react";
import { WsContoller } from "@zs-ui/controllers";

const WsControllerContext = React.createContext<WsContoller>(new WsContoller({
  heartBeatConfig: {
    handleHeartBeatMsg: (msg) => {
      console.log("msg>>>", msg);
      return true;
    },
  },
}));

export interface WsControllerContextProps {
  children?: React.ReactNode;
}

export const WsControllerContextProvider: React.FC<WsControllerContextProps> = ({ children }) => {
  const originWsController = React.useContext(WsControllerContext)
  return (
    <WsControllerContext.Provider value={originWsController}>
      {children}
    </WsControllerContext.Provider>
  )
}

export default WsControllerContext;