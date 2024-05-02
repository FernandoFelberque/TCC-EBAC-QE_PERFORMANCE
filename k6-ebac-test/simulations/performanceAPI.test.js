import http from "k6/http";
import { group,sleep } from "k6";
import Cupom from "../request/cupom.request";

export default function(){
    let cupom = new Cupom()
    
    group('Lista de Cupons',()=>{
        cupom.cupomLista()
    })
}