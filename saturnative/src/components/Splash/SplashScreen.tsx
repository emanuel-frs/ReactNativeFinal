import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { hideAsync } from "expo-splash-screen";
import { useState } from "react";
import { StyleSheet } from "react-native";

export { hideAsync } from "expo-splash-screen";

type Props = {
    onComplete: (status: boolean) => void;
};

export function Splash({ onComplete }: Props) {
    const [lastStatus, setLastStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus);

    function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
        if (status.isLoaded) {
            if (lastStatus.isLoaded !== status.isLoaded) {
                hideAsync();
                setLastStatus(status);
            }

            if (status.didJustFinish) {
                onComplete(true);
            }
        }

        setLastStatus(()=> status);
    }

    return (
        <Video
            style={StyleSheet.absoluteFill}
            resizeMode={ResizeMode.COVER}
            source={require('../../../assets/splash.mp4')}
            isLooping={false}
            onPlaybackStatusUpdate={onPlaybackStatusUpdate}
            shouldPlay={true}
        />
    );
}
