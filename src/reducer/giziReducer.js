import {submit_asessment} from '../action/types'
const initialState={
	imt:'',
	keb_kalori:'',
	lemak:'',
	protein:'',
	karbohidrat:''
}
export default function(state=initialState,action){
	switch(action.type){
		case submit_asessment:
			return{
				...state,
				imt:action.payload.imt,
				keb_kalori:action.payload.keb_kalori,
				lemak:action.payload.lemak,
				protein:action.payload.protein,
				karbohidrat:action.payload.karbohidrat
			}
		default:
			return state;
	}
}