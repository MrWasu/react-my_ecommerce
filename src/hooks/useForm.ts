import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations :any = {}) => {

    const [formState, setFormState] :any = useState(initialForm);
    const [formValidation, setFormValidation] :any = useState<{ [key: string]: any }>({});

    // actualiza el estado si cambia el initialForm
    useEffect(() => {
        setFormState(initialForm);
    }, [initialForm]);

    const isFormValid = useMemo(() => {

        // importa el resultado de las validaciones, las comprueba, y luego exporta un boolean
        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null) return false;
        }

        return true;
    }, [formValidation]);

    const onInputChange = ({ target }: any) => {
        // función que se encarga de cambiar el estado al escribir dentro del campo
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    // funciones que se encargan de verificar las validaciones cada vez que el estado de los campos de texto cambien
    useEffect(() => {
        createValidators();
    }, [formState]);

    const createValidators = () => {

        const formCheckedValues: { [key: string]: any } = {};

        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage] = formValidations[formField];

            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        }

        setFormValidation(formCheckedValues);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid
    };
};
