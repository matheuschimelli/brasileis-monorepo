import React from 'react'
import FormBase from '../../FormBase'
import Input from '../../FormBase/Input'
import Textarea from '../../FormBase/TextArea'

export default function CategoryForm() {
    return (
        <FormBase
            create
            formTitle="Editar Categoria"
            initSchema={{ name: String, description: String }}
            apiRoute="categories"
            method="POST"
        >
            <Input
                name="name"
                label="Nome da Categoria"
                type="text"
                helper="Use um nome descritivo"
                placeholder="Nome da Categoria"
            />

            <Textarea
                name="description"
                label="Descrição da Categoria"
                type="text"
            />
        </FormBase>

    )
}