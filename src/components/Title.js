//same as: function title() {
export default function Title({Title,subtitle}){
    return (
        <>
            <h1 className="title">{Title}</h1>
            <br />
            <h2 className="subtitle">{subtitle}</h2>
        </>
    )
}