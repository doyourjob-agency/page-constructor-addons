import { withNaming } from '@bem-react/classname';
import { UIKIT_ROOT_CLASS } from '../constants';
export const NAMESPACE = 'pc-addons-';
export const cn = withNaming({ e: '__', m: '_' });
export const block = withNaming({ n: NAMESPACE, e: '__', m: '_' });
export const rootCn = cn(UIKIT_ROOT_CLASS);
