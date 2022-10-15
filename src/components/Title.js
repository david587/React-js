//same as: function title() {
export default function Title({Title,subtitle}){
    return (
        <div>
            <h1 className="title">{Title}</h1>
            <br />
            <h2 className="subtitle">{subtitle}</h2>
        </div>
    )
}