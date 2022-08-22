import React, {ReactHTMLElement, ReactNode} from "react";

export interface Props {
    children?: ReactNode
}

export interface ColumnProps {
    folderSection?: JSX.Element|JSX.Element[]
    centralSection?: JSX.Element|JSX.Element[]
    id_central_section?: string
}

export interface Card {
    id_project: number
    text: string
    image: string
}