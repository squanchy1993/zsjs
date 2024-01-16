import * as React from "react";
import { WsContoller } from "@zsjs/ws-controller";

const WsControllerContext = React.createContext<WsContoller | null>(null);

export interface WsControllerContextProps {
  children?: React.ReactNode;
  wsContoller: WsContoller
}

export const WsControllerContextProvider: React.FC<WsControllerContextProps> = ({ children, wsContoller }) => {
  return (
    <WsControllerContext.Provider value={wsContoller}>
      {children}
    </WsControllerContext.Provider>
  )
}

export default WsControllerContext;