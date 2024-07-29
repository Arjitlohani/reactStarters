
import PropsChild1Child from './PropsChild1Child';

const PropsChild1 = ({name}) => {
    return (
        <div>
            <p>{name}</p>
            <PropsChild1Child name={name}/>
        </div>
    );
}

export default PropsChild1;
