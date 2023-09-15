import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer"

import app from "./app"
import system from "./system"

export function setupProdMockServer() {
    createProdMockServer([...app,...system])
}
