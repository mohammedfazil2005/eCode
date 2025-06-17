import axios from "axios";

const commonAPI=async(method,endpoint,data)=>{
    let config={
       method:method,
       url:'http://localhost:3000'+endpoint,
       data:data
    }
    return await axios(config).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}

export default commonAPI