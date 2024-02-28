import { useEffect, useState } from "react";

export function useDeviceStatus() {
    const [ isOnline, setOnlineStatus ] = useState(false);

    useEffect(() => {
        const onPress = (e: KeyboardEvent) => {
            // Mock status
            if (e.key === 'q') setOnlineStatus(true);
            else if (e.key === 'z') setOnlineStatus(false);
        };

        addEventListener('keypress', onPress);
        return () => removeEventListener('keypress', onPress);
    }, []);

    return {
        isOnline,
        setOnlineStatus
    }
}