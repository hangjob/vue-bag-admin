import GlobalForm from "@/packages/components/GlobalForm.vue";
import LargeUploadFile from "@/packages/components/LargeUploadFile.vue";

const setupComponents = (app) => {
    app.component('BagGlobalForm', GlobalForm)
    app.component('BagLargeUploadFile', LargeUploadFile)
}

export default setupComponents
