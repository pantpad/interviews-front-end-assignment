import { FormInput } from './FormInput'
import { FormSelect } from './FormSelect'

import { useFormContext, handleChange } from '../../../context/form-context'

export default function FormInputs() {
    const {
        state: { values },
        dispatch,
    } = useFormContext()

    return (
        <div>
            <div className="[&>label]:block">
                <label htmlFor="name">Name</label>
                <FormInput
                    id="name"
                    name="name"
                    type="text"
                    value={values['name'] ?? ''}
                    placeholder="Insert recipe name"
                    required
                    pattern="^[a-zA-Z0-9\s]+$"
                    errorMessage="Name must contain only letters, numbers and spaces"
                    onChange={(e) =>
                        handleChange(dispatch, e.target.name, e.target.value)
                    }
                />
            </div>
            <div className="[&>label]:block">
                <label htmlFor="name">Ingredients</label>
                <FormInput
                    id="ingredients"
                    name="ingredients"
                    type="text"
                    value={values['ingredients']}
                    placeholder="Insert ingredients"
                    required
                    pattern="^[a-zA-Z0-9\s]+$"
                    errorMessage="Ingredients must contain only letters, numbers and spaces"
                    onChange={(e) =>
                        handleChange(dispatch, e.target.name, e.target.value)
                    }
                />
            </div>
            <div className="[&>label]:block">
                <label htmlFor="name">Instructions</label>
                <FormInput
                    id="instructions"
                    name="instructions"
                    type="text"
                    value={values['instructions']}
                    placeholder="Insert instructions"
                    required
                    pattern="^[a-zA-Z0-9\s]+$"
                    errorMessage="instructions must contain only letters, numbers and spaces"
                    onChange={(e) =>
                        handleChange(dispatch, e.target.name, e.target.value)
                    }
                />
            </div>
            <div className="[&>label]:block">
                <label htmlFor="name">Cuisines</label>
                <FormSelect
                    id="cuisineId"
                    value={values['cuisineId']}
                    name="cuisineId"
                    options="cuisines"
                    onChange={(e) =>
                        handleChange(dispatch, e.target.name, e.target.value)
                    }
                />
            </div>
            <div className="[&>label]:block">
                <label htmlFor="name">Diets</label>
                <FormSelect
                    id="dietId"
                    value={values['dietId']}
                    name="dietId"
                    options="diets"
                    onChange={(e) =>
                        handleChange(dispatch, e.target.name, e.target.value)
                    }
                />
            </div>
            <div className="[&>label]:block">
                <label htmlFor="name">Difficulties</label>
                <FormSelect
                    id="difficultyId"
                    value={values['difficultyId']}
                    name="difficultyId"
                    options="difficulties"
                    onChange={(e) =>
                        handleChange(dispatch, e.target.name, e.target.value)
                    }
                />
            </div>
            <div className="[&>label]:block">
                <label htmlFor="name">Image</label>
                <FormInput
                    id="image"
                    name="image"
                    type="file"
                    placeholder="Insert Image"
                    required
                    accept="image/png, image/jpeg, image/jpg"
                    errorMessage="An image is required to add a recipe"
                    onChange={(e) =>
                        handleChange(dispatch, e.target.name, e.target.value)
                    }
                />
            </div>
        </div>
    )
}
