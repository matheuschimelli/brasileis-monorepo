import React from 'react'
import FormBase from '../../FormBase'

import Checkbox from '../../../components/FormBase/Checkbox'
import Input from '../../../components/FormBase/Input'
import Textarea from '../../../components/FormBase/TextArea'


import Select from '../../FormBase/Select'
import SimpleSelect from '../../FormBase/SimpleSelect'

export default function CrawlerForm() {
    return (
        <FormBase
            create
            formTitle="Editar Crawler"
            initSchema={{ name: String, description: String }}
            apiRoute="crawlers"
            method="POST"
        >
            <Input
                name="name"
                label="Nome do tipo do Crawler"
                type="text"
                helper="Use um nome descritivo"
                placeholder="Nome do Crawler"
            />
            <Input
                name="source"
                label="Url fonte"
                type="text"
                helper="Utilize url inteiro"
                placeholder="http://site.com"
            />
            <Input
                name="cron"
                label="Cron"
                type="text"
                helper="Horário de execução"
                placeholder="* * * * * "
            />
            <Textarea
                name="description"
                label="Descrição do crawler"
                type="text"
            />
            <Checkbox
                name="notifyUpdates"
                label="Notificar Atualizações para usuários"

            />
            <Input
                name="mainBlockTitle"
                label="Título completo da lei ou artigo"
                type="text"
                placeholder="Ex: Código Cívil"
            />
            <Textarea
                name="mainBlockDescription"
                label="Descrição da lei ou artigo"
                type="text"
            />
            <Input
                name="version"
                label="Versão do documento"
                type="number"
            />

            <Input
                name="slug"
                label="Sigla do Código ou decreto, etc"
                type="text"
                placeholder="Sigla. Ex: CDC, CPC, etc..."
            />
            <SimpleSelect
                name="blockType"
                label="Tipo do bloco a ser criado"
                options={[{ name: 'Código', value: 'CODIGO' }, { name: 'Decreto', value: 'DECRETO' }]}
                placeholder='Selecione tipo'
                dataLabel='name'
                dataValue='value'
            />
            <Select
                name="crawlerTypeId"
                label="Processador do Crawler"
                apiPath='crawler-types'
                placeholder='Selecione um processador'
                dataLabel='name'
                dataValue='id'
            />
        </FormBase>

    )
}