import { combineReducers } from "redux";

const initialaddnumber={
    result:0
}
const addition=(state=initialaddnumber,action)=>{
    switch(action.type) {
        case 'ADD':
            return{
                ...state,
                result:state.result+action.payload,
            };
            
            default:
                return state;
    }
}
const initialsubnumber={
    result:0
}
const subtraction=(state=initialsubnumber,action)=>{
    switch(action.type) {
        case 'SUB':
            return{
                ...state,
                result:action.payload-state.result
            };
            
            default:
                return state;
    }
}
    
const initialmulnumber={
    result:1
}
const multiplication=(state=initialmulnumber,action)=>{
    switch(action.type) {
        case 'MUL':
            return{
                ...state,
                result: state.result*action.payload,
            };
            
            default:
                return state;
    }
}
const initialdivnumber={
    result:1

}
const division=(state=initialdivnumber,action)=>{
    switch(action.type) {
        case 'DIV':
            return{
                ...state,
                result:action.payload/state.result,
            };
            
            default:
                return state;
    }
}

const combine = combineReducers({
    add:addition,
    sub:subtraction,
    mul:multiplication,
    div:division
    
})
export default combine;


