import emailjs from '@emailjs/browser'

export const emailFunc=(obj)=>{
  return  emailjs.send("service_deeor5g","template_4goqgve",obj,"mqBz8NAq2FOffELx6").then((res)=>{
        return {status:200,res:res}
    }).catch((err)=>{
        return {status:404,res:res}
    })
}

