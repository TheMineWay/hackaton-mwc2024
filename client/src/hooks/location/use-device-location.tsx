import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { DeviceLocationModel } from "../../models/location/device-location.model";

export function useDeviceLocation(deviceId: string) {
    return useQuery({
        queryKey: ['locations', deviceId],
        queryFn: async () => {
            return (await axios.get<DeviceLocationModel>(`${import.meta.env.VITE_API_HOST}/location/${deviceId}`)).data;
        },
    });
}