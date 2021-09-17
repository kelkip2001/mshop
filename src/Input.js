import clsx from "clsx"


export default function Input(props){
    const {type="text",placeholder,name,required,className,...rest}=props
    const classNames = clsx({input:true},className)
    
    return <>
<label className="label">
    {placeholder}
    {required && <span className="input-required">**</span>}
    <div>
             <input type={type} className={classNames} placeholder={placeholder} required={required} {...rest}/>
    </div>
</label>
   
    </>
}