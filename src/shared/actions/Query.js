import axios from 'axios';
class Query {
    constructor(domain) {
        if(typeof domain !== "string") throw new Error("Query needs a domain");
        this.domain = domain;
    }

    runQuery(name, action, data = {}, method = "get") {
        if(typeof name !== "string") throw new Error("A query needs a name");
        if(typeof action !== "string") throw new Error("A query needs an action");
        return (dispatch) => {
            dispatch({type: `QUERY_PENDING`, payload: {name: name}});
            return axios({
                method: method,
                url: `${this.domain}/${action}`,
                data: data
            }).then(
                (response) => {
                    return dispatch({
                        type: `QUERY_FULFILLED`,
                        payload: {
                            data: response.data,
                            name: name
                        }
                    });
                },
                (error) => {
                    return dispatch({
                        type: `QUERY_REJECTED`,
                        payload: {
                            data: error,
                            name: name
                        }
                    });
                }
            );
        }
    }
}
export default Query;