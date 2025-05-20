// eslint-disable-next-line react/prop-types
const Imagem = ({pic, imgStyle}) => {
    return (
        <div className={`${imgStyle}`}>
            <img src={pic}/>
        </div>
    )
}
export default Imagem