// --------------------- TYPES -------------------// 

// User Account Type //

export type AccountUser={ //usuario da conta
    name:string,
    cpf:string,       
    birthDate:string,
    balanceAccount: number,
    extract: []
}

// Transition Types //

export type BalanceAccount={ //saldo da conta
    name:string,
    cpf:string, 
}

export type AccountValueAdd={ //valor da conta adicionado
    name:string,
    cpf:string, 
    value: number,
}

export type Pay={ //pagar
    valuePay: number,
    descriptionPay: string,
    datePay: string,
}

export type TransferMoney={ //transferencia de dinheiro
    name:string,
    cpf:string,
    recipientName: string,
    recipientCpf: string,
    valueTransfer: number,
}

