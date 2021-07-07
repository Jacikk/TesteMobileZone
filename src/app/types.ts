export interface cardContent{
    imgUrl:string,
    content: string
}

export type cardAction = {
    type: string
    content: cardContent
}

export type DispatchType = (args: cardAction) => cardAction

export interface dadosDeContato {
    nome:string,
    email:string,
    telefone:string
}

export interface searchString {
    search: string
}