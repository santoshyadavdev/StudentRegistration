import { UIRouter } from '@uirouter/angular';

export function UIRouterConfigFn(router: UIRouter){
    router.urlService.rules.otherwise({ state: 'personal' });
}