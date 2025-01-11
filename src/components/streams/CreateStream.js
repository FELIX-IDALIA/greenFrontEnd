import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";


const CreateStream = () => {
    const [isStreaming, setIsStreaming] = useState(false);
    const [userId, setUserId] = useState(null);
    const videoRef = useRef();
    const socketRef = useRef();
    const mediaStreamRef = useRef();

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const response = await fetch("/api/auth/me", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                if (!response.ok) throw new Error("Failed to fetch user data");
                const data = await response.json();
                setUserId(data.userId);
            } catch (error) {
                console.error("Error fetching user ID:", error);
            }
        };

        fetchUserId();

        socketRef.current = io("http://localhost:3000");
        return () => socketRef.current.disconnect();
    }, []);

    const startStream = async () => {
        if (!userId) {
            console.error("User ID is not available");
            return;
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true, 
                audio: true,
            });

            mediaStreamRef.current = stream;
            videoRef.current.srcObject = stream;

            socketRef.current.emit("startStream", { userId });
            setIsStreaming(true);

            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder = ondataavailable = (event) => {
                if (event.data.size > 0) {
                    socketRef.current.emit("streamData", {
                        userId,
                        chunk: event.data,
                    });
                }
            };
            mediaRecorder.start(1000);
        } catch (error) {
            console.log("Error accessing media devices:", error);
        }
    };

    const stopStream = () => {
        if (mediaStreamRef.current) {
            mediaStreamRef.current.getTracks().forEach((track) => track.stop());
            socketRef.current.emit("endStream", { userId });
            setIsStreaming(false);
        }
    };

    return (
        <div>
            <video ref={VideoRef} autoPlay muted className="w-full max-w-2xl" />
            <div className="mt-4">
                {!isStreaming ? (
                    <button
                        onClick={startStream}
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Start Streaming
                    </button>
                ): (
                    <button
                        onClick={stopStream}
                        className="px-4 py-2 bg-red-500 text-white rounded"
                    >
                        Stop Streaming
                    </button>
                )}
            </div>
        </div>
    );


};

export default CreateStream;