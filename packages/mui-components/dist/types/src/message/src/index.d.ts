import React from "react";
import { AlertColor } from "@mui/material";
export default class ZsMessage {
    static success({ content, duration, }: {
        content: string;
        duration?: number;
    }): void;
    static error({ content, duration }: {
        content: string;
        duration?: number;
    }): void;
    static warning({ content, duration, }: {
        content: string;
        duration?: number;
    }): void;
    static info({ content, duration }: {
        content: string;
        duration?: number;
    }): void;
    static renderMessage({ content, duration, type, }: {
        content: React.ReactNode;
        duration?: number;
        type: AlertColor;
    }): void;
}
//# sourceMappingURL=index.d.ts.map