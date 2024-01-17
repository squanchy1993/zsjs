import * as React from "react";
import { WsController } from "@zsjs/ws-controller";

const WsControllerContext = React.createContext<WsController | null>(null);

export interface WsControllerContextProps {
  children?: React.ReactNode;
  wsController: WsController
}

export const WsControllerContextProvider: React.FC<WsControllerContextProps> = ({ children, wsController }) => {
  return (
    <WsControllerContext.Provider value={wsController}>
      {children}
    </WsControllerContext.Provider>
  )
}

export default WsControllerContext;