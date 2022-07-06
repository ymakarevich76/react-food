import { MealItem } from "./MealItem";

function MealList(props) {
    const {meals = []} = props;

    return <div className="list">
        {
            meals.map(meal => (
                <MealItem key={meal.idMeal} {...meal}/>
            ))
        }
    </div>
}

export {MealList}