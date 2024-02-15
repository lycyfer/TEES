import { useParams } from "react-router-dom";
import './pageHero.css'

function PageHero({ path }) {
    let { id } = useParams()
    let pathName;
    switch (path) {
        case '/products':
            pathName = 'Products';
            document.title = 'Product | Twilight';
            break;

        case `/products/${id}`:
            pathName = 'Product';
            document.title = ` Product | Twilight | ${id}`;
            break;
    }

    return (
        <div className="page-hero">
            <div className="section-center">
                <h3 className="page-hero-title">Home | Product | {id}</h3>
                <div className="page-hero-twilight">Twilight</div>
            </div>
        </div>
    )
}

export default PageHero;