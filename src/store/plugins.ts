const enqueue = "EnQueueTask";
const dequeue = "DeQueueTask";

export const loadingScreenPlugin = store => {
    store.subscribe((mutation, state) => {

        if(mutation.type === enqueue && state.TaskQueue === 1) {
            //start your custom loader/spinner
        }

        if(mutation.type === dequeue && state.TaskQueue === 0) {
            //stop your custom loader/spinner
        }
    })
}