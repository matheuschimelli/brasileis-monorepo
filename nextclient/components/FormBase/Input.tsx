import React from 'react'
import { FormControl, FormLabel, Input as ChakraInput, FormHelperText } from '@chakra-ui/react'

type Props = {
    name: string
    value?: string
    onChange?: (e: any) => void
    label: string
    type: string
    helper?: string
    placeholder?: string
}
export default function Input({ name, value, onChange, type, label, helper, placeholder }: Props) {
    return (
        <FormControl>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <ChakraInput id={name} type={type} onChange={onChange} value={value} placeholder={placeholder} />
            {helper && (
                <FormHelperText>{helper}</FormHelperText>
            )}
        </FormControl>
    )
}