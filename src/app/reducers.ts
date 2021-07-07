import { actionTypes } from "./actionCreators";
import { cardAction, cardContent} from "./types";

import TecladoGamer from '../assets/tecladoGamer2.jpg'
import Controles from '../assets/controles.jpg'


const banner: cardContent = {
    imgUrl: TecladoGamer,
    content: "Super lançamento: Teclado Modular!"
};


export const changeDestaque1 = (state = banner, action: cardAction): cardContent => {
    switch (action.type) {

        case actionTypes.CHANGE:
            const toChange: cardContent = {
                imgUrl: action.content.imgUrl,
                content: action.content.content
            }
            return { ...state,
                 imgUrl: action.content.imgUrl, 
                 content: action.content.content
                };
    }
    return state;
}
