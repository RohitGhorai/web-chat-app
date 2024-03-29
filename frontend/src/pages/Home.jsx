import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ConversationContainer from "../components/ConversationContainer";
import useGetUsers from "../hooks/useGetUsers";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../hooks/useConversation";

const Home = () => {
    const { loading, users } = useGetUsers();

    return (
        <div className="flex justify-center items-center overflow-hidden h-screen">
            <div className="flex flex-row justify-center items-center h-full w-full lg:h-[90%] lg:w-[90%] rounded-md dark:border-gray-600">
                <div className="hidden border-s border-y rounded-s-md md:block h-full w-[300px]">
                    <Sidebar users={users} loading={loading} />
                </div>
                <ConversationContainer users={users} loading={loading} />
            </div>
        </div>
    );
};

export default Home;
