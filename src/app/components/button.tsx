import React from "react";
import { ButtonType } from "../interface";

export default function Button({ btnClass, title }: ButtonType) {
    return <button className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ${btnClass}`}>{title}</button>
}