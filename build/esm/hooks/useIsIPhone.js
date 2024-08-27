import { useContext } from 'react';
import { DeviceContext } from '../components/Navigation/contexts/device';
export function useIsIPhone() {
    const device = useContext(DeviceContext);
    return (device === null || device === void 0 ? void 0 : device.model) === 'iPhone';
}
