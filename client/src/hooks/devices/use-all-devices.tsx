import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Device {
    id: string;
    name: string;
    model: string;
    serialNumber: string;
    phoneNumber: string;
}

export function useAllDevices() {
    return useQuery({
        queryKey: ['all-devices'],
        queryFn: async () => {
            return (await axios.get<Device[]>(`${import.meta.env.VITE_API_HOST}/devices`)).data;
        },
    });
}