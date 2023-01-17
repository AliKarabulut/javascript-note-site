import { Fragment } from "react"
import styles from "./Start.module.css"

const Start = (props) =>{
    return ( <Fragment>
        <p>Dökümantasyon öğretmekten ziyade hatırlatma amacı taşımaktadır. Hatalı gördüğünüz ya da eklemek istediğiniz şeyler için githubdan destek atabilirsiniz :)</p>
        <button onClick={props.onStart}>Hadi Başlayalım.</button>
    </Fragment>)
}

export default Start