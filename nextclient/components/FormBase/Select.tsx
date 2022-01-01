import React, { useEffect, useState, useMemo } from "react";
import { Select as ChakraSelect } from "chakra-react-select";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useData } from "../../lib/hooks";

type Props = {
    name: string;
    value?: any;
    onChange?: (fun: any) => void;
    label: string
    type?: string
    helper?: string
    placeholder?: string
    apiPath: string
    dataLabel: string
    dataValue: string
    isMulti?: boolean
};

export default function Select(props: Props) {
    const { data, error }: { data: any[]; error: any } = useData(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/${props.apiPath}`);
    const [selectedValue, setSelectedValue] = useState<any>();


    useEffect(() => {
        if (selectedValue && selectedValue.id) {
            if (props.onChange) {
                console.log(selectedValue)
                props.onChange({
                    id: selectedValue.id,
                    persist: () => { },
                    target: {
                        name: props.name,
                        value: selectedValue[props.dataValue],
                    },
                });
            }
        }
    }, [selectedValue]);

    const selectedOptionMemo = useMemo(() => {
        if (props.value && props.value !== "") {
            if (data && data.length !== 0) {
                const foundItem = data.find((e: any) => e.id === props.value);
                return [foundItem];
            }
        }
    }, [props.value, data]);


    if (data && data.length !== 0) {
        return (
            <FormControl>
                <FormLabel>{props.label}</FormLabel>
                <ChakraSelect
                    placeholder={props.placeholder}
                    colorScheme="gray"
                    selectedOptionStyle="check"
                    focusBorderColor="gray.800"
                    options={data}
                    getOptionLabel={(label: any) => label[props.dataLabel]}
                    getOptionValue={(value: any) => value[props.dataValue]}
                    onChange={(value: any) => setSelectedValue(value)}
                    value={selectedOptionMemo}
                />
            </FormControl>
        );
    }
    return <>loading</>;
}