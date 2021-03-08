import {useGlobalContext} from "../AppContext";


const IngredientInput = ({name, quantity, unit,id}) => {
    const {handleChange} = useGlobalContext();
    return (
        <>
            <h5>Ingredient #{id + 1}</h5>
            <div className='form-control'>
                <label htmlFor='name'>Ingredient Name: </label>
                <input type='text' name='name' data-id={id} className='name' value={name}
                       onChange={handleChange} id='name'/>
            </div>
            <div className='form-control'>
                <label htmlFor='quantity'>Quantity: </label>
                <input type='number' name='quantity' data-id={id} className='quantity' value={quantity}
                       onChange={handleChange} id='quantity'/>
            </div>
            <div className='form-control'>
                <label htmlFor='unit'>Unit: </label>
                <input type='text' name='unit' data-id={id} className='unit' value={unit}
                       onChange={handleChange} id='unit'/>
            </div>
        </>
    )
}


export default IngredientInput;


