import React from "react";

export const SignInCompoment = () => {
    return(
        <form>
            <label for="email">email</label>
            <input type="email" placeholder="Youremail@mail.com" id="email" name="email"/>
            <label for="password">password</label>
            <input type="password" placeholder="*****" id="password" name="password"/>
        </form>
    )
}