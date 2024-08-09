import GlobalTable from "@/packages/components/GlobalTable.vue";
import GlobalForm from "@/packages/components/GlobalForm.vue";

const setupComponents = (app) => {
    app.component('BagGlobalTable', GlobalTable)
    app.component('BagGlobalForm', GlobalForm)
}

export default setupComponents
