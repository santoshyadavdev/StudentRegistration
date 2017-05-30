export interface PaymentMethod{
    id:number;
    paymentMethodCode:string;
}

export interface CcExpiryMonth{
    id:number;
    month:string;
}

export interface CcExpiryYear{
    id:number;
    year:string;
}
export interface BankAccountType{
    id:number;
    accountTypeName:string;
}

export class PaymentProvider{
    paymentMethodList:PaymentMethod[];
    ccMonthList:CcExpiryMonth[];
    ccYearList:CcExpiryYear[];
    accountTypeList:BankAccountType[];

    getpaymentMethodList(){
        return this.paymentMethodList=[
                {id:0,paymentMethodCode:"Charge My Credit Card"},
                {id:1,paymentMethodCode:"Debit My Bank Account"}
            ]};

    getCCExpireMonthList(){
        return this.ccMonthList=[
                {id:0, month:"Month"},
                {id:1, month:"Jan"},
                {id:2, month:"Feb"},
                {id:3, month:"Mar"},
                {id:4, month:"Apr"},
                {id:5, month:"May"},
                {id:6, month:"June"},
                {id:7, month:"July"},
                {id:8, month:"Aug"},
                {id:9, month:"Sep"},
                {id:10,month:"Oct"},
                {id:11,month:"Nov"},
                {id:12,month:"Dec"},
            ]};
    
    getCCExpireYearList(){
           return this.ccYearList=[
                {id:0,year:"Year"},
                {id:1,year:"2017"},
                {id:2,year:"2018"},
                {id:3,year:"2019"},
                {id:4,year:"2020"},
                {id:5,year:"2021"},
                {id:6,year:"2022"},
                {id:7,year:"2023"},
                {id:8,year:"2024"},
            ]};
   
    getBankAccountTypeList(){
          return this.accountTypeList=[
              {id:0,accountTypeName:"Select"},
              {id:1,accountTypeName:"Checking"},
              {id:2,accountTypeName:"Saving"}
              ]};        
}
