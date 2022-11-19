// --------------------- TYPES -------------------// 

export type Extract={
    valuePay:number,
    descriptionPay:string,
    datePay:string,
}

// User Account Type //

export type AccountUser={ 
    name:string,
    cpf:string,       
    birthDate:string,
    balanceAccount: number,
    extract: Extract[]
}

// Transition Types //

export type BalanceAccount={ 
    name:string,
    cpf:string, 
}

export type AccountValueAdd={ 
    name:string,
    cpf:string, 
    value: number,
}

export type Pay={ 
    valuePay: number,
    descriptionPay: string,
    datePay: string,
}

export type TransferMoney={ 
    name:string,
    cpf:string,
    recipientName: string,
    recipientCpf: string,
    valueTransfer: number,
}

