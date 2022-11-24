import { IProps } from '../models/ibuttonprops';

export function Button ({ clicavel = "sim"} : IProps) : JSX.Element {
    if (clicavel === "nao") return <></>;
    return <button>Clique aqui!</button>;
}