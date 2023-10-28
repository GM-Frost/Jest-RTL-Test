import { setupWorker } from "msw/browser";
import { handlers } from "./Handlers";

export const server = setupWorker(...handlers);
