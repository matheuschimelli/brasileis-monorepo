import React from "react";
import { Select } from '@chakra-ui/react'
import { FormControl, FormLabel } from "@chakra-ui/react";

type Props = {
    name: string;
    value?: any;
    onChange?: (fun: any) => void;
    label: string
    type?: string
    helper?: string
    placeholder?: string
    dataLabel: string
    dataValue: string
    isMulti?: boolean
    options?: any
};

export default function SimpleSelect(props: Props) {
    return (
        <FormControl>
            <FormLabel>{props.label}</FormLabel>
            <Select placeholder='Select option' onChange={props.onChange} value={props.value} name={props.name}>
                <option value='CODIGO'>Código</option>
                <option value='DECRETO'>Decreto</option>
                <option value='NORMA'>Norma</option>
                <option value='PORTARIA'>Portaria</option>
                <option value='LEI'>Lei</option>
                <option value='JURISPRUDENCIA'>Jurisprudência</option>
                <option value='INFO'>Informação</option>
            </Select>
        </FormControl>
    );
}