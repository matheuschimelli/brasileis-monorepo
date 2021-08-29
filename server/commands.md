Start Postgresql shell --> sudo -u postgres psql
Create automatic migration --> yarn typeorm migration:generate -n AddEscritorioVirtualModels
Run migration --> yarn typeorm migration:run


TODO: fix some files

yarn typeorm migration:generate -n AddPeticaoPrevidenciariaModel