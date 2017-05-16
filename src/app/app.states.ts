import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';
import { TuitionpaymentComponent } from './tuitionpayment/tuitionpayment.component'


export const appStates = [
   // 1st State
    { name: 'personal', url: '/personal',  component: PersonalComponent },
    // 2nd State:
    { name: 'work', url: '/work',  component: WorkComponent },
    // 3rd State
    { name: 'payment', url: '/address',  component: TuitionpaymentComponent },
    // 4th State
    { name: 'result', url: '/result',  component: ResultComponent }
];