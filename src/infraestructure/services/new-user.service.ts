import { Session } from "gunbound-typescript-sdk/dist/web/session"

export const newUser = async (data: any, request: any, session: Session) => {
    console.log("==============")
    console.log(data)
    console.log(request)
    console.log("=======================")

    console.log(session.get("test"))
    return {
        is: 1
    }
}