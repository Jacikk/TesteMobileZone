import React, { FC } from "react";
import { HeaderBar, LogoContainer } from "./styles.js";
import { useForm, SubmitHandler } from "react-hook-form";
import { searchString } from "../../app/types.js";

export const Header: FC = () => {

    const { register, handleSubmit } = useForm<searchString>();
    const onSubmit: SubmitHandler<searchString> = data => console.log(data);

    return <HeaderBar>
        <LogoContainer><p>Sua logo vai aqui</p></LogoContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='Pesquisar' {...register("search")} />
        </form>
        <button>Login</button>
    </HeaderBar>
}