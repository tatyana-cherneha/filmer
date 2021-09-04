import './FilmInfo.scss'

function FilmInfo(props) {

    // let menuElements = props.navBar.map(m => <NavItem id={m.id} menuList={m.menuList} />)
    // console.log(menuElements);
    return (
        <div className='film'>
            <div className='film__info'>
                <h2>{props.items.title} ({props.items.release_date})</h2>
                <div className='film__info-item'>
                    <div>
                       <h4>langde</h4>
                       <p>1 time 23 min</p>
                    </div>
                    <div>
                        <h4>lang</h4>
                        <p>USA</p>
                    </div>
                    <div>
                        <h4>sprak</h4>
                        <p>english</p>
                    </div>
                </div>
                <div>
                    <div>

                    </div>
                    <div>
                        <div>Play</div>
                        <div>Trailer</div>
                        <div>Haskeliste</div>
                    </div>
                </div>

            </div>
            <div className='film__descr'>
                <p>{props.items.overview}</p>
            </div>

        </div>
    )
}

export default FilmInfo;
