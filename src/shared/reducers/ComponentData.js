import update from 'immutability-helper';

export default function ReportAPI (
    state = {},
    action = {
        type: null,
        payload: null
    }
) {
    switch (action.type) {
        case "SET_COMPONENT":
            initializeEntry(state, action.payload.name);
            return update(state, {
                [action.payload.name] : { $set:action.payload.data }
            });
        default:
            return state;
    }
}

function initializeEntry(state, entry) {
    if (typeof state[entry] === "undefined") {
        state[entry] = {};
    }
}