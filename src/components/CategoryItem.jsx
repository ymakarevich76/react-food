import { Link } from 'react-router-dom';

function CategoryItem(props) {
    const {
        strCategory: name,
        strCategoryDescription: descr,
        strCategoryThumb: image,
    } = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={image} alt={name} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{descr.slice(0, 60)}...</p>
            </div>
            <div className='card-action'>
                <Link to={`/category/${name}`} className='btn'>
                    Watch category
                </Link>
            </div>
        </div>
    );
}

export { CategoryItem };
