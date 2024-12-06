import { CanDeactivateFn } from '@angular/router';

export const unsavedPageGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
alert('Are you Sure?')
 return true
};
