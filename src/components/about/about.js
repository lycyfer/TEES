import './about.css'
import masha from '../about/img/Omo9wA4ur3k.jpg'
import twlight from '../about/img/NVIDIA_Share_zHwTFFtVfn-transformed.png'

const About = () => {
    return (
        <div className="about">
            <div className='about_me'>
                <h1>О нас</h1>
                <div className='about-text_block'>
                    Twilight - это утонченный и стильный ювелирный интернет-магазин, где представлены изысканные украшения для тех, кто ценит красоту и элегантность. В ассортименте магазина представлены уникальные изделия из драгоценных металлов, драгоценных камней и жемчуга, созданные мастерами-ювелирами с большим опытом. Каждое украшение в магазине Twilight - это произведение искусства, которое подчеркнет вашу индивидуальность и станет ярким акцентом вашего образа. Благодаря удобному интерфейсу и быстрой доставке, покупка в магазине Twilight станет приятным и удобным процессом. Погрузитесь в мир роскоши и красоты с ювелирным интернет-магазином Twilight.
                </div>
                <h2 className='aboutMe'>Обо мне</h2>
                <div className='about__container'>

                    <div className='about__me'>
                        <div className='about__me-img'>
                            <img src={masha} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className='up-about__container'>
                            <div className='obomne'>
                                <p>Привет, я</p>
                                <h2>Мария</h2>

                            </div>
                            <div className='about-comp'>Создатель интерент магазина</div>
                            <img src={twlight} alt="" />
                        </div>
                        <div className='abtext'>
                            Эта дипломная работа написана с помощью связки React + Redux с использованием Firebase для авторизации. Данная работа показывает, как можно, используя эти технологии, создать ювелирный интернет-магазин.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About