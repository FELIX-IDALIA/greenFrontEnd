import React, { useEffect, useRef, useState } from "react";



const CreateStream = () => {
    const [streamData, setStreamData] = useState(null);
    const [isStreaming, setIsStreaming] = useState(false);
    const [error, setError] = useState(null);
    const videoRef = useRef();
    const mediaStreamRef = useRef();

   const createStream = async () => {
    try {
        const response = await fetch("http://localhost:3000/home/api/create/stream", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }, 
            body: JSON.stringify({
                title: "My Stream", // You might want to make this dynamic
                description: "Stream description"
            })
        });

        if (!response.ok) {
            throw new Error("Failed to create stream");
        }

        const data = await response.json();
        setStreamData(data);
    } catch (error) {
        setError(error.message);
    }

   };

   const startStream = async () => {
    try {
        // Get local media stream
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        });

        // Show preview to streamer
        mediaStreamRef.current = stream;
        videoRef.current.srcObject = stream;

        // Start the stream on backend
        const response = await fetch("http://localhost:3000/home/api/start/stream", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });

        if (!response.ok) {
            throw new Error("Failed to start stream");
        }

        setIsStreaming(true);

        // Here you would show RTMP details to user
        alert(`
            Use these details in OBS/Streamlabs:
            RTMP URL: ${streamData.rtmpUrl}
            Stream Key: ${streamData.streamKey}
            `);
    } catch (error) {
        setError(error.message);
        //stopStream();    
    }
   };

   {/*
   const stopStream = async () => {
    if (mediaStreamRef.current) {
        // Stop local preview
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
        videoRef.current.srcObject = null;

        // End stream on backend
        try {
            await fetch(`/api/streams/${streamData.id}/end`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
        } catch (error) {
            console.error("Error ending stream:", error);
        }

        setIsStreaming(false);
        setStreamData(null);
    }
   }; */}

   return (
    <div className="max-w-2xl mx-auto p-4">
        {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
            </div>
        )}

        <div className="bg-black rounded-lg overflow-hidden">
            <video 
                ref={videoRef}
                autoPlay
                muted
                className="w-full h-full object-cover"
            />
        </div>

        <div className="mt-4 flex justify-center gap-4">
            {!streamData && (
                <button 
                    onClick={createStream}
                    className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    Create Stream
                </button>
            )}

            {streamData && !isStreaming && (
                <button
                    onClick={startStream}
                    className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                    Start Preview
                </button>
            )}

            {/*
            {isStreaming && (
                <button
                    onClick={stopStream}
                    className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                    End Stream
                </button>
            )} */}
        </div>
        {streamData && (
            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Streaming Details</h3>
                <div className="space-y-2">
                    <p className="text-sm">
                        <span className="font-medium">RTMP URL:</span> {streamData.rtmpUrl}
                    </p>
                    <p className="text-sm">
                        <span className="font-medium">Stream Key:</span> {streamData.streamKey}
                    </p>
                </div>

            </div>
        )}

    </div>
   );


};

export default CreateStream;