import loader from '../../../assets/images/loader.gif';
import s from './Preloader.module.css';
let Preloadre = () => {
    return <div>
        <img src={loader} className={s.loaderImg} />
    </div>
}
export default Preloadre;