import http from "k6/http";
import { group,sleep } from "k6";
import Cupom from "../request/cupom.request";
import { target } from "../webpack.config";


export const options= {
    stages:[
        {duration: '10s', target:10},
        {duration: '5s', target:50},
        {duration: '10s', target:10},
        {duration: '0s', target:0},
    ],
    thresholds: {
        http_req_duration: ['p(99)<100']
    }
}

export default function(){
    let cupom = new Cupom()

    
    
    group('Lista de Cupons',()=>{
        cupom.cupomLista()
    })
}