interface ButtonProps {
    name: string;
    classname?: string;
}

export default function Button(prop:ButtonProps) {
    return (
        <div>
            <button className={`${prop.classname}`} >
                
                    {prop.name}
                    
            </button>
        </div>
    )
}