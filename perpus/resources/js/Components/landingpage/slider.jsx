export default function Slider ({children: slides}){
    return(
        <div className="overflow-hidden relative">
            <div className="flex">{slides}</div>
            </div>
    )
}
