import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { DeviceLocationModel } from "../../models/location/device-location.model";

export function useAllDevices() {
    return useQuery({
        queryKey: ['all-devices', 'info'],
        queryFn: async () => {
            return (await axios.get<{
                location: DeviceLocationModel;
            }[]>(`${import.meta.env.VITE_API_HOST}/devices/info/all`)).data;
        },
    });
}