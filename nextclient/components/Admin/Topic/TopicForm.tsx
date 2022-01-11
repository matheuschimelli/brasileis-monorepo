import React from 'react'
import FormBase from '../../FormBase'
import Input from '../../../components/FormBase/Input'
import Textarea from '../../../components/FormBase/TextArea'

export default function TopicForm() {
    return (
        <FormBase
            create
            formTitle="Editar Tópico"
            initSchema={{ name: String, description: String }}
            apiRoute="topics"
            method="POST"
        >
            <Input
                name="name"
                label="Nome do Tópico"
                type="text"
                helper="Use um nome descritivo"
                placeholder="Nome do Tópico"
            />

            <Textarea
                name="description"
                label="Descrição do tópico"
                type="text"
            />
        </FormBase>

    )
}