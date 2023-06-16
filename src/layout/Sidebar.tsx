import { Outlet } from "react-router-dom"
import styles from './Sidebar.module.css'
import { Button } from "../components"
import { AiOutlinePlus } from 'react-icons/ai'
import { FiSidebar } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RxPerson } from 'react-icons/rx'
import { FiMoreHorizontal } from 'react-icons/fi'


const mockData = [
    {
        "chatId": "5f6e4d7e-a438-483d-a7f7-3c25af998286",
        "title": "Please exp",
        "createdAt": "2023-06-13T15:32:23.512+00:00"
    },
    {
        "chatId": "0252449b-0217-4031-9884-b60372fa044e",
        "title": "Please exp",
        "createdAt": "2023-06-13T15:53:09.850+00:00"
    },
    {
        "chatId": "4941baa1-07b9-47f4-b8f0-2cf45c238ef4",
        "title": "Please exp",
        "createdAt": "2023-06-13T15:56:02.577+00:00"
    },
    {
        "chatId": "4a53e78f-5e69-4f3d-bac2-dd47ac800c18",
        "title": "Please exp",
        "createdAt": "2023-06-13T16:16:23.390+00:00"
    },
    {
        "chatId": "97624934-f355-4c23-98b0-5308a58b02d8",
        "title": "Please exp",
        "createdAt": "2023-06-13T16:48:34.387+00:00"
    },
    {
        "chatId": "3ec996c9-2177-484d-a66e-b0722a600ecc",
        "title": "Please exp",
        "createdAt": "2023-06-13T16:53:55.649+00:00"
    },
    {
        "chatId": "03103198-e080-4354-9119-2eaea245e08a",
        "title": "Please exp",
        "createdAt": "2023-06-13T16:56:46.560+00:00"
    },
    {
        "chatId": "c820cfe0-7d71-4651-a516-78ca1819a747",
        "title": "Please exp",
        "createdAt": "2023-06-13T16:59:04.611+00:00"
    },
    {
        "chatId": "48299578-dbb5-43f4-9aaf-2ac3cd167b79",
        "title": "Please exp",
        "createdAt": "2023-06-13T17:01:54.621+00:00"
    },
    {
        "chatId": "405d1bcd-fc7b-4383-af9e-00743192295e",
        "title": "Please exp",
        "createdAt": "2023-06-13T17:03:35.705+00:00"
    },
    {
        "chatId": "75f06033-1450-489e-a7b1-427fe841e24d",
        "title": "Please exp",
        "createdAt": "2023-06-13T17:05:51.043+00:00"
    },
    {
        "chatId": "e4c97c53-538e-4568-a8cf-29ffd0fd2e8d",
        "title": "Please exp",
        "createdAt": "2023-06-13T17:08:42.659+00:00"
    },
    {
        "chatId": "a8808c98-845a-46ec-a946-93f439127b2d",
        "title": "Please exp",
        "createdAt": "2023-06-13T17:11:51.195+00:00"
    },
    {
        "chatId": "a3c33acf-7720-4746-9c91-4e6dfd2422de",
        "title": "Please exp",
        "createdAt": "2023-06-13T17:14:04.246+00:00"
    },
    {
        "chatId": "6533ef5f-b832-4609-bae0-35c1ea9de899",
        "title": "Please exp",
        "createdAt": "2023-06-13T17:20:23.141+00:00"
    },
    {
        "chatId": "dbff1532-ad58-4d16-a0f1-e451be327c5a",
        "title": "What was i",
        "createdAt": "2023-06-13T17:34:33.517+00:00"
    },
    {
        "chatId": "07d1140c-b410-4c7a-9cc0-415dd11950c6",
        "title": "What was i",
        "createdAt": "2023-06-13T17:35:27.095+00:00"
    },
    {
        "chatId": "1b0f8cd5-7498-4425-a0b8-64d2fe9b6caf",
        "title": "What was i",
        "createdAt": "2023-06-13T17:36:52.604+00:00"
    },
    {
        "chatId": "02160a0d-c69e-4b8f-94e1-dfdd7d31a7e1",
        "title": "Is there a",
        "createdAt": "2023-06-13T18:10:24.267+00:00"
    },
    {
        "chatId": "1a79642c-094b-4d9d-ba7c-0b90ec69334f",
        "title": "Can you re",
        "createdAt": "2023-06-13T18:54:47.706+00:00"
    },
    {
        "chatId": "f1f4ebd1-b607-4fa0-95bf-4becff3b7116",
        "title": "Can you re",
        "createdAt": "2023-06-13T18:55:30.223+00:00"
    },
    {
        "chatId": "d6a7b4fe-0b1b-4131-bf7f-517be9ce2d19",
        "title": "Can you re",
        "createdAt": "2023-06-13T18:58:34.334+00:00"
    },
    {
        "chatId": "edad30dc-834b-4d82-8783-605734123119",
        "title": "what was I talking about?",
        "createdAt": "2023-06-16T10:55:50.901+00:00"
    },
    {
        "chatId": "00839c0a-b1a7-4319-aabd-7e3dc8028ab3",
        "title": "What was I talking about?",
        "createdAt": "2023-06-16T12:12:02.289+00:00"
    },
    {
        "chatId": "84a80f4a-778c-4e4f-b4ba-4396ef7af79b",
        "title": "What was I talking about?",
        "createdAt": "2023-06-16T12:12:44.822+00:00"
    },
    {
        "chatId": "5a3b3590-9998-4e03-965d-d7f70a13d64e",
        "title": "What was I talking about?",
        "createdAt": "2023-06-16T12:27:26.653+00:00"
    }
];

export const Sidebar = () => {
    return (
        <div className="flex overflow-hidden w-full h-full">
            <div className={`${styles.sidebar} h-screen w-[260px] p-2`}>
                <div className="flex gap-2">
                    <Button variant="outline" className="gap-3 justify-start w-full">
                        <AiOutlinePlus />New chat
                    </Button>

                    {/* <Button variant="outline" className="">
                        <FiSidebar />
                    </Button> */}
                </div>

                <div className={styles.scrollableContainer}>
                    {
                        mockData.map(({ chatId, createdAt, title }) => <div key={chatId} className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-4">
                            <div>
                                <BsChatLeft size={16}/>
                            </div>
                            <div className="text-ellipsis whitespace-nowrap">
                                {title}
                            </div>
                        </div>)
                    }


                </div>

                <div className="flex flex-col">
                    <div className="flex justify-between p-3">
                        <div className="flex items-center gap-3">
                            <RxPerson />
                            <div className="text-sm">baniyaavaya@gmail.com</div>

                        </div>
                        <FiMoreHorizontal />
                    </div>
                </div>
            </div>


            <Outlet />
        </div>
    )
}
