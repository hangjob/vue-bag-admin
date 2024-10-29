import {getCrypto} from "@/packages/helpers/index.js";

const {iv, key} = getCrypto({iv: '0132456789ABCDEF', key: '0132456789ABCDEF'})
export {
    iv,
    key
}
