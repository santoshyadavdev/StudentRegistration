import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';
<<<<<<< HEAD
import { TuitionpaymentComponent } from './tuitionpayment/tuitionpayment.component';
=======
import { StudentComponent } from './student/student.component';
>>>>>>> c82ed360f97c144b58e00403b5758dbdead287c7


export const appStates = [
   // 1st State
    { name: 'personal', url: '/personal',  component: PersonalComponent },
    // 2nd State:
   // { name: 'work', url: '/work',  component: WorkComponent },
  
    { name: 'student', url: '/student',  component: StudentComponent },
    // 3rd State
    { name: 'payment', url: '/address',  component: TuitionpaymentComponent },
    // 4th State
    { name: 'result', url: '/result',  component: ResultComponent }
];