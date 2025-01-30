import { FormInput } from './FormInput'
import { FormSelect } from './FormSelect'

import { useFormContext, handleChange } from '../../../context/form-context'

export default function FormInputs() {
    const {
        state: { values, errors },
        dispatch,
    } = useFormContext()

    console.log('errors', errors)

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
                    errorMessage={errors.name}
                    onChange={(e) => {
                        handleChange(dispatch, 'name', e.target.value)
                    }}
                />
            </div>
            <div className="[&>label]:block">
                <label htmlFor="ingredients">Ingredients</label>
                <FormInput
                    id="ingredients"
                    name="ingredients"
                    type="text"
                    value={values['ingredients']}
                    placeholder="Insert ingredients"
                    errorMessage={errors.ingredients}
                    onChange={(e) =>
                        handleChange(dispatch, 'ingredients', e.target.value)
                    }
                />
            </div>
            <div className="[&>label]:block">
                <label htmlFor="instructions">Instructions</label>
                <FormInput
                    id="instructions"
                    name="instructions"
                    type="text"
                    value={values['instructions']}
                    placeholder="Insert instructions"
                    errorMessage={errors.instructions}
                    onChange={(e) =>
                        handleChange(dispatch, 'instructions', e.target.value)
                    }
                />
            </div>
            <div className="[&>label]:block">
                <label htmlFor="cuisineId">Cuisines</label>
                <FormSelect
                    id="cuisineId"
                    value={values['cuisineId']}
                    name="cuisineId"
                    options="cuisines"
                    errorMessage={errors.cuisineId}
                    onChange={(e) =>
                        handleChange(dispatch, 'cuisineId', e.target.value)
                    }
                />
            </div>
            <div className="[&>label]:block">
                <label htmlFor="dietId">Diets</label>
                <FormSelect
                    id="dietId"
                    value={values['dietId']}
                    name="dietId"
                    options="diets"
                    errorMessage={errors.dietId}
                    onChange={(e) =>
                        handleChange(dispatch, 'dietId', e.target.value)
                    }
                />
            </div>
            <div className="[&>label]:block">
                <label htmlFor="difficultyId">Difficulties</label>
                <FormSelect
                    id="difficultyId"
                    value={values['difficultyId']}
                    name="difficultyId"
                    options="difficulties"
                    errorMessage={errors.difficultyId}
                    onChange={(e) =>
                        handleChange(dispatch, 'difficultyId', e.target.value)
                    }
                />
            </div>
            <div className="[&>label]:block">
                <label htmlFor="image">Image</label>
                <FormInput
                    id="image"
                    name="image"
                    type="file"
                    placeholder="Insert Image"
                    accept="image/png, image/jpeg, image/jpg"
                    errorMessage={errors.image}
                    onChange={(e) => {
                        const file = e.target.files?.[0] || null
                        if (!file) {
                            alert('file type not supported')
                            return
                        }
                        handleChange(dispatch, 'image', file)
                    }}
                />
            </div>
        </div>
    )
}
