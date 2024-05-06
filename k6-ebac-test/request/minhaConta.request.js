import http from "k6/http";
import Utils from "../utils/utils";
import { check } from "k6";

export default class minhaConta {

    login() {
        http.post(`${Utils.getBaseUrlUI()}`, {

            headers: {

                "Content-Type": "application/x-www-form-urlencoded",
                "origin": "http://lojaebac.ebaconline.art.br",
                "upgrade-insecure-requests": 1
            },

            body: {

                "username": "USER1_EBAC",
                "password": "psw!ebac@test",
                "woocommerce-login-nonce": "34a0d57ac1",
                "_wp_http_referer": "/minha-conta/",
                "login": "Login"

            }
        })

    }

    detalhesDaConta() {
        http.get(`${Utils.getBaseUrlUI()}/edit-account/`, {

            headers: {
                "upgrade-insecure-requests": 1
            },
        })
    }

    editarDetalhes() {
        let response = http.post(`${Utils.getBaseUrlUI()}/edit-account/`, {

            headers: {

                "Content-Type": "application/x-www-form-urlencoded",
                "origin": "http://lojaebac.ebaconline.art.br",
                "upgrade-insecure-requests": 1
            },

            body: {

                "account_first_name": "teste",
                "account_last_name": "tcc",
                "account_display_name": "user1_ebac",
                "account_email": "user1_ebac@ebac.com",
                "password_current": "",
                "password_1": "",
                "password_2": "",
                "save-account-details-nonce": "${save-account-details-nonce1}",
                "_wp_http_referer": "${_wp_http_referer1}",
                "save_account_details": "Save changes",
                "action": "${action1}"

            }
        })

        check(response, {
            "OK": (r) => r.status === 200
        })

    }


}