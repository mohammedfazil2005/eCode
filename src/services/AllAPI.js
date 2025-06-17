import commonAPI from "./commonAPI"

export const fetchData=async()=>{
    return await commonAPI("get",'/getQA',{})
}