import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { DeviceModel } from "../../models/device/device.model";

export function useAllDevices() {
    return useQuery({
        queryKey: ['all-devices'],
        queryFn: async () => {
            return (await axios.get<DeviceModel[]>(`${import.meta.env.VITE_API_HOST}/devices`)).data;
        },
    });
}