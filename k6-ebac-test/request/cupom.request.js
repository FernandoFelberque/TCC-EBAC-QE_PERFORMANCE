import http from "k6/http";
import Utils from "../utils/utils";
import { check } from "k6";

export default class cupom {

    cupomLista() {
        let response = http.get(`${Utils.getBaseUrl()}/wc/v3/coupons`, {
            
            auth: {
                user: "admin_ebac",
                pass: "@admin!&b@c!2022"
            },

            headers: {
              
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            }
        })
        check(response, {
            "OK": (r) => r.status === 200
        })
    }
}