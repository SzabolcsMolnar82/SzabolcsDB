export const load = async ( event ) => {
    console.log(event.locals);
    return {
        user: event.locals.user
    };
}

export const actions = {
    default: async ( event ) => {
        var data = await event.request.formData();
        console.log(data.get('Teszt'));
    }
}