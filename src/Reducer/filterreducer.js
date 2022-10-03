const initialState = {
    filter_name : "All Items"
}

export default function filter_name(state=initialState, action){
    // {/* destructuring actions and storing in individual values */}
    const {type,payload} = action

    // {/* switch statement for resetting the filter and setting the filter */}
    switch(type){
        case "SETFILTER" :
            return {...state, filter_name:payload}
        case "RESETFILTER" :
            return {...state, filter_name:"All Items"}
        default :
            return state;
        
    }
}