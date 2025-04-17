import GlobalForm from "@/packages/components/GlobalForm.vue";
import GlobalFormCreate from "@/packages/components/GlobalFormCreate.vue";

const setupComponents = (app) => {
    app.component('BagGlobalForm', GlobalForm)
    app.component('BagGlobalFormCreate', GlobalFormCreate)
}

export default setupComponents
