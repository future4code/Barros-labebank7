// --------------------- TYPES -------------------// 

// User Account Type //

type AccountUser={
    name:string,
    cpf:string,       
    birthDate:string,
    balanceAccount: number,
}

// Transition Types //

type BalanceAccount={
    name:string,
    cpf:string, 
}

type AccountValueAdd={
    name:string,
    cpf:string, 
    value: number,
}

type Pay={
    valuePay: number,
    descriptionPay: string,
    datePay: string,
}

type TransferMoney={
    name:string,
    cpf:string,
    recipientName: string,
    recipientCpf: string,
    valueTransfer: number,
}

