import clsx from "clsx"


export default function Input(props){
    const {type="text",placeholder,name,required,className,...rest}=props
    
    return <>
    <input type={type} placeholder={placeholder} required={required} {...rest}/>
    </>
}