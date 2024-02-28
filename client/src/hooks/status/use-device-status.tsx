import { useEffect, useState } from "react";

const LS_KEY = (id: string) => 'is_online_device_' + id;

const get = (id: string) => {
    try {
        return localStorage.getItem(LS_KEY(id)) === 'true';
    } catch(e) {
        return false;
    }
}

const set = (id: string, status: boolean) => {
    localStorage.setItem(LS_KEY(id), status ? 'true' : 'false');
}

export function useDeviceStatus(id: string, disableMock?: boolean) {
    const [ isOnline, setOnlineStatus ] = useState(get(id));

    useEffect(() => {
        if (disableMock) return;
        const onPress = (e: KeyboardEvent) => {
            // Mock status
            if (e.key === 'q') setOnlineStatus(true);
            else if (e.key === 'z') setOnlineStatus(false);
        };

        addEventListener('keypress', onPress);
        return () => removeEventListener('keypress', onPress);
    }, [disableMock, id]);

    useEffect(() => {
        set(id, isOnline);
    }, [id, isOnline]);

    return {
        isOnline,
        setOnlineStatus
    }
}