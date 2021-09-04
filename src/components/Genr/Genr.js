import './Genr.scss'

function Genr(props) {

    let posterElements = props.map(p => <img src={p.poster_path} alt="film image"/>)
    // console.log(menuElements);
    return (
        <div className='genr__item'>
            <div className='genr__item-img'>
               {posterElements}
            </div>


        </div>
    )
}

export default Genr;
