import { createContext } from "react";

interface ContextType {
  userDetails: () => Promise<void>;
}

const Context = createContext<ContextType | null>(null);

export default Context;
