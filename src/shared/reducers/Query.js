import update from 'immutability-helper';

export default function Query (
    state = {},
    action = {
        type: null,
        payload: null
    }
) {
    switch (action.type) {
        case "QUERY_PENDING":
            initializeEntry(state, action.payload.name);
            return update(state, {
                [action.payload.name] : {
                    fetching:   {$set: true},
                    fetched:    {$set: false},
                    response:   {$set: null},
                    error:      {$set: null}
                }
            });
        case "QUERY_FULFILLED":
            initializeEntry(state, action.payload.name);
            return update(state, {
                [action.payload.name] : {
                    fetching:   {$set: false},
                    fetched:    {$set: true},
                    response:   {$set: action.payload.data},
                    error:      {$set: null}
                }
            });
        case "QUERY_REJECTED":
            initializeEntry(state, action.payload.name);
            return update(state, {
                [action.payload.name] : {
                    fetching:   {$set: false},
                    fetched:    {$set: true},
                    response:   {$set: null},
                    error:      {$set: action.payload.data}
                }
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