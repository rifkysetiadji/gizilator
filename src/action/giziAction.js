import {submit_asessment} from './types'

export const kirim=(asessment)=>dispatch=>{
	fetch('http://192.168.43.5:8080/api/simpan',{
		 method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(asessment)
	}).then(res=>res.json())
	  .then(asessment=>dispatch({
	  	type:submit_asessment,
	  	payload:asessment
	  }))
}