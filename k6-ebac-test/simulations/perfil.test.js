import http from "k6/http";
import { group,sleep } from "k6";
import MinhaConta from "../request/minhaConta.request";

export const options= {
    stages:[
        {duration: '10s', target:10},
        {duration: '5s', target:50},
        {duration: '10s', target:10},
        {duration: '0s', target:0},
    ],
    thresholds: {
        http_req_duration: ['p(99)<1000']
    }
}

export default function(){
    let minhaConta = new MinhaConta()

    
    
    group('Alterar dados',()=>{
       minhaConta.login
       sleep(10)
       minhaConta.detalhesDaConta
       sleep(30)
       minhaConta.editarDetalhes
    })
}