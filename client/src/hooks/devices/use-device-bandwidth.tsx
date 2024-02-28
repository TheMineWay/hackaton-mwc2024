import { useEffect, useState } from "react";

const getStored = (key: string) => (+(localStorage.getItem(`bandwidth_device_${key}`) ?? '50')) ?? 50;

export function useDeviceBandWidth(deviceId: string) {
    const [ bandwidth, setBandwidth ] = useState<number>(getStored(deviceId));

    useEffect(() => {
        localStorage.setItem(`bandwidth_device_${deviceId}`, bandwidth.toString());
    }, [bandwidth, deviceId]);

    return {
        bandwidth, setBandwidth
    }
}