//same as: function title() {
import "./Title.css"  

export default function Title({Title,subtitle}){
    return (
        <div className="title-block">
            <h1 className="title">{Title}</h1>
            <br />
            <h2 className="subtitle">{subtitle}</h2>
        </div>
    )
}