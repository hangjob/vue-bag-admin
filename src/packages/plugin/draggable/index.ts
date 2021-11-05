import type {App} from 'vue';
import {Draggable, DraggableDirective, DraggablePlugin} from '@braks/revue-draggable';


const setupDraggable = (app: App) => {
    app.use(DraggablePlugin);

    // app.directive('draggable', DraggableDirective)
    // app.component('Draggable', Draggable);
}

export {
    setupDraggable
}