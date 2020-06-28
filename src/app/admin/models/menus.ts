import { Menu, CUSTOM } from '../role-menu/menu';

let custom = {
    role: CUSTOM,
    titulo:"GERAL",
    categorias:[
      {
        nome:"Situação",
        icon: "nav-icon fas fa-edit",
        itens:[
            {
                nome:"Editar",
                url:"/admin/situacao",
                icone:"far fa-circle nav-icon"
            },
        ]
    },
        {
            nome:"Unidades",
            icon: "nav-icon fas fa-book",
            itens:[
                {
                    nome:"Criar",
                    url:"/admin/unidade-create",
                    icone:"far fa-circle nav-icon"
                },
                {
                  nome:"Admin",
                  url:"/admin/unidades",
                  icone:"far fa-circle nav-icon"
              },

            ]
        },
    ]
};


export const MENU: Menu[] =[custom];
