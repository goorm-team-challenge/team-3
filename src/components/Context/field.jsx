import React, { createContext, useContext } from 'react';

import { useFormStateContext, useSetFormStateContext } from './form';

const FieldValueContext = createContext;

export function FieldProvider({ name, children }) {
	const formState = useFormStateContext();

	return (
		<FieldValueContext.Provider value={formState[name]}>
			{children}
		</FieldValueContext.Provider>
	);
}

export function useFieldContext() {
	const fieldValue = useContext(FieldValueContext);
	const setFieldValue = useSetFormStateContext();

	if (fieldValue == null) {
		throw new Error(`Cannot find <FieldValueContext.Provider>`);
	}

	return [fieldValue, setFieldValue];
}
